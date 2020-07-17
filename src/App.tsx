import React from 'react';
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList, { Todo } from './components/TodoList';
import { TodoState } from './reducers/todo';
import { updateCurrent } from './reducers/todo';

export interface AppProps {
  todos: Todo[],
  currentTodo: string,
  updateCurrent: (val: string) => void
}

function App({ todos, currentTodo, updateCurrent }: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React with Redux.
        </p>
      </header>
      <div className="Todo-App">
        <TodoForm currentTodo={currentTodo} changeCurrent={updateCurrent} />
        <TodoList todos={todos} currentTodo={currentTodo} />
      </div>
    </div>
  );
}

export default connect(
  (state: TodoState) => state,
  { updateCurrent }
)(App)
