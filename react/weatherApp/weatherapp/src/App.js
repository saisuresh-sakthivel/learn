import React, { Component } from 'react';
//import Weather from './components/Weather';
import NameForm from './NameForm';
//import { createStore, applyMiddleware } from 'redux'
import './App.css';
//import reducer from './reducers'
//import createSagaMiddleware from 'redux-saga';
//import rootsaga from './saga';

/*const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootsaga);
const action = type => store.dispatch({type});
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Weather weatherinfo={store.getState().weather}/>*/}
        <NameForm />
      </div>
    );
  }
}

export default App;
