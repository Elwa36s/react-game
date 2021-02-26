import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import fieldReducer from './redux/reducers/reducer'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Field from './Field'
import initialState from './redux/initialState';
import store from './redux/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Field tiles={[2048,1024,512,256,4,0,64,2,8,0,4,0,32,128,0,16]}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
