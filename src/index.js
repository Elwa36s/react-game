import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import gameReducers from './redux/reducers/reducer'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { moveLeft, moveRight } from './redux/actions/actionCreators';
import { createStore } from 'redux';
import App from './components/app/app'
import { compose } from 'redux';

const store = createStore(gameReducers, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
