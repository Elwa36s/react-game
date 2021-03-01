import {CHECK_WIN, CHECK_LOSE, CHECK_SCORE} from '../actions/actionType';
import {isWin, isLose, calculateScore} from '../reducers/gameLogic'
import initialState from './fieldReducer'

const scoreReducer = (state = initialState, action) => {
    const bestScore = state.bestScore;
    const tiles = state.tiles;

    switch (action.type){
        case CHECK_WIN: {
            const win = isWin(tiles);
            return {...state, win : win};
        }
        case CHECK_LOSE: {
            const lose = isLose(state.impossibleMoves);
            return {...state, lose : lose};
        }
        case CHECK_SCORE: {
            const currentScore = calculateScore(tiles);
            return currentScore > bestScore ? {...state, currentScore, bestScore : currentScore} : {...state, currentScore};
        }
        default: return state;
    }
}

export default scoreReducer