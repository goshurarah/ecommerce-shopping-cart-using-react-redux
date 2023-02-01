import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

import rootReducer from './Services/Reducers/index'
const store = createStore(rootReducer)
// console.log('store :>> ', store);

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);