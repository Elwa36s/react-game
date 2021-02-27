import {combineReducers} from 'redux';
import fieldReducer from './fieldReducer';


const reducers = combineReducers({
    field : fieldReducer,
})

export default reducers;