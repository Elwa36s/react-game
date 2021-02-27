
import {UP, DOWN, LEFT, RIGHT, INIT_GAME} from '../actions/actionType'
import {sum, rotate, makeLines, checkPossibleMove, putRandomNumber} from './arrayTransformation'

const  initialState = {
    tiles : [0,0,2,0,4,0,0,0,0,0,0,0,0,0,0,0],
    score : {
    currentScore : 0,
    bestScore : 0,
    moves : 0
    },
};

const fieldReducer = (state = initialState.tiles, action) => {
    console.log(state)
    const arr = [].concat(state),
        arrLined = makeLines(arr);
    switch(action.type) {
        case UP: {

            let result = sum(arrLined).flat(1);
            if (checkPossibleMove(arr, result)){
                result = putRandomNumber(result);
                console.log('***STATE BACK***')
                return result
            }
        return state;
        };
        case DOWN: {
            const num = action.payload,
                back = 4 - num,
                swappedArr = rotate(arrLined, num),
                summedArr = sum(swappedArr);
            let result = rotate(summedArr, back).flat(1);
                if (checkPossibleMove(arr, result)){
                    result = putRandomNumber(result);
                    return result
                }
            return state
        };
        case LEFT: {
            const num = action.payload,
                back = 4 - num,
                swappedArr = rotate(arrLined, num),
                summedArr = sum(swappedArr);
            let result = rotate(summedArr, back).flat(1);
                if (checkPossibleMove(arr, result)){
                    result = putRandomNumber(result);
                    return result
                }
            return state
                
        };
        case RIGHT: {
            const num = action.payload,
                back = 4 - num,
                swappedArr = rotate(arrLined, num),
                summedArr = sum(swappedArr);
            let result = rotate(summedArr, back).flat(1);
                if (checkPossibleMove(arr, result)){
                    result = putRandomNumber(result);
                    return result
                }
            return state
        };
        case INIT_GAME: {
            const emptyField = Array(16);
            emptyField.map(tile => 0);
            let result = putRandomNumber(emptyField);
            return result
        }
        default:
            return state;

    }
};


export default fieldReducer;