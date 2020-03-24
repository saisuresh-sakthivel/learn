import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootreducer from './reducer/rootreducer'
import { rootSaga } from './saga'

const sagaMiddleWare = createSagaMiddleware()
const store = createStore(rootreducer,
  applyMiddleware(sagaMiddleWare));
console.log(store.getState());
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
