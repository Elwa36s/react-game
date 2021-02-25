import initialState from "../initialState";
import {UP, DOWN, LEFT, RIGHT} from '../actions/actions'


const fieldReducer = (state = initialState.tiles, action) => {
    const arr = [].concat(state);
    switch(action.type) {
        case UP: {
            const result = sum(arr);
            return {
                ...state, tiles : result
            }
        };
        case DOWN: {
            const num = 2,
                back = 4 - num,
                swappedArr = rotate(arr, num),
                summedArr = sum(swappedArr),
                result = rotate(summedArr, back);
            return {
                ...state, tiles : result
            }
        };
        case LEFT: {
            const num = 3,
                back = 4 - num,
                swappedArr = rotate(arr, num),
                summedArr = sum(swappedArr),
                result = rotate(summedArr, back);
            return {
                ...state, tiles : result
            }
        };
        case RIGHT: {
            const num = 1,
                back = 4 - num,
                swappedArr = rotate(arr, num),
                summedArr = sum(swappedArr),
                result = rotate(summedArr, back);
            return {
                ...state, tiles : result
            }
        };
        default:
            return state;

    }
};

function sum(arr){
    const rowLength = arr[0].length,
        changedArr = [].concat(arr);
    for (let i = 0; i < rowLength - 1; i++){
        let currentRow = changedArr[i],
        nextRow = changedArr[i + 1];
        for(let j = 0; j< rowLength; j++){
            if(currentRow[j] === nextRow[j] || currentRow[j] === 0){
                currentRow[j] += nextRow[j];
                nextRow[j] = 0;
            }
        }
    }
    return changedArr;
    }
    
    function rotate(arr, times = 1){
        const check = times - 1;
        const rotatedArr = arr[0].map((item, idx) => arr.map((row) => row[idx]).reverse());
        return check === 0 ? rotatedArr : rotate(rotatedArr, check);
    }
    

export default fieldReducer;