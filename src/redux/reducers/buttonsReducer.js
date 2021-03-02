import {SETTINGS, SHOW_SCORE, MUTE_SOUND} from '../actions/actionType'

const initialState = {
    settingsIsOpen : false,
    muted : false,
    score : false,
};
const buttonsReducer = (state = initialState, action) => {
    switch(action.type){
        case SETTINGS: {
            const modal = !state.settingsIsOpen;
            return {...state, settingsIsOpen : modal}
        }
        case MUTE_SOUND: {
            const isMuted = !state.muted;
            return {...state, muted : isMuted}
        }
        default: return state;
    }
}
export default buttonsReducer;