import {putRandomNumber} from './arrayTransformation'

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
    result.length === 0 ? console.log('no win') : console.log('win')
    return result.length === 0 ? false : true;
}

function isLose(array){
    let directions = new Set(array);
     directions = new Array(directions);
    console.log(`directions.length = ${directions.length}`)
    return (directions.length === 4) ? true : false
}
export {initGame, calculateScore, isLose, isWin};