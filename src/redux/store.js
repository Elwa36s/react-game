import {createStore} from 'redux';
import initialState from './initialState';
import fieldReducer from './reducers/reducer'

const store = createStore(fieldReducer, initialState);

export default store;