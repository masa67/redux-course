import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { Todo } from './components/TodoList';
import * as serviceWorker from './serviceWorker';
import store from './store'
import { Dispatch, bindActionCreators, AnyAction } from 'redux'
import { TodoAction, TodoActionType, updateCurrent } from './reducers/todo';

const actions = bindActionCreators({ updateCurrent }, store.dispatch as Dispatch<AnyAction>)

ReactDOM.render(
  <Provider store={store}>
    <App changeCurrent={actions.updateCurrent} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
