import {UP, DOWN, LEFT, RIGHT, INIT_GAME, CHECK_LOSE, CHECK_SCORE, CHECK_WIN, LOAD_LAST_GAME, SETTINGS, MUTE_SOUND} from './actionType'

function moveUp(){
    return {
        type: UP,
        payload: 1
    };
};
function moveDown(){
    return {
        type: DOWN,
        payload : 3
    };
};

function moveLeft(){
    return {
        type: LEFT,
        payload : 2
    };
};

function moveRight(){
    return {
        type: RIGHT,
        payload : 4
    };
};

function initGame(){
    return {
        type: INIT_GAME,
    };
}

function checkForLose(){
    return {
        type: CHECK_LOSE,
    };
}

function checkForWin(){
    return {
        type: CHECK_WIN,
    };
}

function calcScore(){
    return {
        type: CHECK_SCORE,
    };
}

function loadGame(){
    return {
        type: LOAD_LAST_GAME,
    }
}

function settings(){
    return {
        type: SETTINGS,
    }
}

function mute(){
    return {
        type: MUTE_SOUND,
    }
}

export  {moveUp, moveDown, moveLeft, moveRight, initGame, checkForLose, checkForWin, calcScore, loadGame, settings, mute};
