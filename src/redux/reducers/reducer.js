import {combineReducers} from 'redux';
import fieldReducer from './fieldReducer';
import scoreReducer from './scoreReducer';

const reducers = combineReducers({
    field : fieldReducer,
})

export default reducers;