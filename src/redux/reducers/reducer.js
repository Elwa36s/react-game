import {combineReducers} from 'redux';
import fieldReducer from './fieldReducer';
import buttonsReducer from './buttonsReducer'


const reducers = combineReducers({
    field : fieldReducer,
    buttons : buttonsReducer
})

export default reducers;