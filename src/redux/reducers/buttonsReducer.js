import {SETTINGS, SHOW_SCORE} from '../actions/actionType'

const initialState = {
    settingsIsOpen : false,
    score : false,
};

const buttonsReducer = (state = initialState, action) => {
    switch(action.type){
        case SETTINGS: {
            const modal = !state.settingsIsOpen;
            return {...state, settingsIsOpen : modal}
        }
            case SHOW_SCORE: {
            const score = !state.score;
        return {...state, score : score}
        }
        default: return state;
    }
}
export default buttonsReducer;