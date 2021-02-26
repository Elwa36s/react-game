import initialState from "../initialState";
import {UP, DOWN, LEFT, RIGHT} from '../actions/actions'
import {sum, rotate, makeLines} from './arrayTransformation'

const fieldReducer = (state = initialState.tiles, action) => {
    const arr = [].concat(state),
        arrLined = makeLines(arr);
    switch(action.type) {
        case UP: {
            const result = sum(arrLined).flat(1);
            return {
                ...state, tiles : result
            }
        };
        case DOWN: {
            const num = 2,
                back = 4 - num,
                swappedArr = rotate(arrLined, num),
                summedArr = sum(swappedArr),
                result = rotate(summedArr, back).flat(1);
            return {
                ...state, tiles : result
            }
        };
        case LEFT: {
            const num = 3,
                back = 4 - num,
                swappedArr = rotate(arrLined, num),
                summedArr = sum(swappedArr),
                result = rotate(summedArr, back).flat(1);
            return {
                ...state, tiles : result
            }
        };
        case RIGHT: {
            const num = 1,
                back = 4 - num,
                swappedArr = rotate(arrLined, num),
                summedArr = sum(swappedArr),
                result = rotate(summedArr, back).flat(1);
            return {
                ...state, tiles : result
            }
        };
        default:
            return state;

    }
};


export default fieldReducer;