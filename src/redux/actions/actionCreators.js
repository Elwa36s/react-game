import {UP, DOWN, LEFT, RIGHT, INIT_GAME} from './actionType'

function moveUp(){
    return {
        type: UP,
        payload: 4
    };
};
function moveDown(){
    return {
        type: DOWN,
        payload : 2
    };
};

function moveLeft(){
    return {
        type: LEFT,
        payload : 1
    };
};

function moveRight(){
    return {
        type: RIGHT,
        payload : 3
    };
};

function initGame(){
    return {
        type: INIT_GAME,
    };
}
export  {moveUp, moveDown, moveLeft, moveRight, initGame};
