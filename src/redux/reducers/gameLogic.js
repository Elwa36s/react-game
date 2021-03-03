import {putRandomNumber, findEmpties} from './arrayTransformation'

function initGame(){
    const emptyField = [];
            for(let i = 0; i <16; i++){
                emptyField.push(0);
            }
    let tiles = putRandomNumber(emptyField);
    tiles = putRandomNumber(tiles);
    return tiles;
}


function calculateScore(array){
    return array.reduce((sum, value) => sum += value, 0);
}

function isWin(array){
    let result = array.filter((value) => value === 2048);
    return result.length === 0 ? false : true;
}

function isLose(array){
    const empty = findEmpties(array);
    if (empty.length === 0){
        const result = [];
        for(let i = 0; i < array.length; i++){
           if (array[i] === array[i+1]){
               if (i !== 3 && i !== 7 && i !== 11){
               result.push(array[i]);
            }
           } 
            if(i <= 11){
                if (array[i] === array[i+4]){
                    result.push(array[i]);
                } 
            }
        }
        return (result.length === 0) ? true : false;
    }
    return false
}
export {initGame, calculateScore, isLose, isWin};