import {UP, DOWN, LEFT, RIGHT, INIT_GAME, CHECK_WIN, CHECK_LOSE, CHECK_SCORE, LOAD_LAST_GAME} from '../actions/actionType'
import {sum, rotate, makeLines, checkPossibleMove, putRandomNumber} from './arrayTransformation'
import {initGame, isWin, isLose, calculateScore} from './gameLogic'

const initialState = {
    tiles : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    currentScore : 0,
    bestScore : 0,
    moves : 0,
    win : false,
    lose : false,
    top10 : [],
    gameStop: false,
};


const fieldReducer = (state = initialState, action) => {
    const tiles = state.tiles;
    let moves = state.moves;
    const arr = [].concat(tiles);
    const arrLined = makeLines(arr);
    const bestScore = state.bestScore;
    
    switch(action.type) {
        case UP: {
            const num = action.payload,
                back = 4 - num,
                swappedArr = rotate(arrLined, num),
                summedArr = sum(swappedArr);
            let result = rotate(summedArr, back).flat(1);
            if (checkPossibleMove(arr, result) && !state.gameStop){
                result = putRandomNumber(result);
                moves += 1;
            return {...state, tiles : result, moves : moves}
            }
        return {...state};
        };
        case DOWN: {
            const num = action.payload,
                back = 4 - num,
                swappedArr = rotate(arrLined, num),
                summedArr = sum(swappedArr);
            let result = rotate(summedArr, back).flat(1);
                if (checkPossibleMove(arr, result) && !state.gameStop){
                    result = putRandomNumber(result);
                    moves += 1;
                    return {...state, tiles : result, moves : moves}
                }
            return {...state};
        };
        case LEFT: {
            const num = action.payload,
                back = 4 - num,
                swappedArr = rotate(arrLined, num),
                summedArr = sum(swappedArr);
            let result = rotate(summedArr, back).flat(1);
                if (checkPossibleMove(arr, result) && !state.gameStop){
                    result = putRandomNumber(result);
                    moves += 1;
                    return {...state, tiles : result, moves : moves}
                }
            return {...state};
                
        };
        case RIGHT: {
            const summedArr = sum(arrLined);
            let result = summedArr.flat(1);
                if (checkPossibleMove(arr, result) && !state.gameStop){
                    result = putRandomNumber(result);
                    moves += 1;
                    return {...state, tiles : result, moves : moves}
                }
            return {...state};
        };
        case INIT_GAME: {
            const result = initGame();
            return {...state, tiles : result, moves: 0, currentScore : 0, win : false, lose : false, gameStop: false}
        }

        case CHECK_WIN: {
            const win = isWin(tiles);
            const bestResults = state.top10;
            if (win) bestResults.push({score : state.currentScore, moves : state.moves});
         return win ? {...state, win : win, gameStop : win, top10 : bestResults} : {...state};
        }
        case CHECK_LOSE: {
            const lose = isLose(tiles);
            const bestResults = state.top10;
            if (lose) bestResults.push({score : state.currentScore, moves : state.moves});
            return lose ? {...state, lose : lose, gameStop : lose, top10 : bestResults} : {...state};
        }
        case CHECK_SCORE: {
            const currentScore = calculateScore(tiles);
            return currentScore > bestScore ? {...state, currentScore, bestScore : currentScore} : {...state, currentScore};
        }
        case LOAD_LAST_GAME: {
            const loadedState = JSON.parse(localStorage.getItem('lastState'));
            return (loadedState !== null) ? {...state, ...loadedState} : state;
        }
        default:
            return state;

    }
};


export default fieldReducer;