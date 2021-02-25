import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './redux/reducers/reducer'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Field from './Field'
import initialState from './redux/initialState';
import store from './redux/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Field tiles={[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
