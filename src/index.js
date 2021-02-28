import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {Provider} from "react-redux"
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {AppReducer} from "./Components/Redux/Reducers/AppReducer";
import 'antd/dist/antd.css';
const jwt = require('jsonwebtoken');

const saveState = (state) => {
  try {
    const {user} = state;
    const crypto = jwt.sign({start: user}, 'trlogic');
    localStorage.setItem('state', crypto);
  } catch (e) {
    console.error(e);
  }
}

const persistedState = jwt.verify(localStorage.getItem('state'), 'trlogic', (err, decoded) => {
  try {
    if (decoded) {
      if (localStorage.getItem('state')) {
        const {user} = decoded;
        return {
          start: user
        };
      }
      return undefined;
    }
  } catch (e) {
    console.error(e);
  }
});

const store = createStore(AppReducer, persistedState, compose(applyMiddleware(thunk)));

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);



