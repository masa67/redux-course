import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Todo } from './components/TodoList';
import * as serviceWorker from './serviceWorker';
import store from './store'
import { TodoActionType } from './reducers/todo';

const render = () => {
  const state = store.getState()

  ReactDOM.render(
    <React.StrictMode>
      <App {...state} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render()

store.subscribe(render)

setTimeout(() => {
  store.dispatch({
    type: TodoActionType.TODO_ADD,
    payload: {
      id: 4,
      name: 'new todo',
      isComplete: false
    }
  })
}, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
