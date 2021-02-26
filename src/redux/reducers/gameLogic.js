import {putRandomNumber} from './arrayTransformation'

function initGame(){
    let tiles = Array(16);
    tiles = putRandomNumber(tiles);
    tiles = putRandomNumber(tiles);
    return tiles;
}