import React from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList, { Todo } from './components/TodoList';
import { TodoState } from './reducers/todo';

export interface AppProps {
  todos: Todo[],
  currentTodo: string,
  changeCurrent: (val: string) => void
}

function App({ todos, currentTodo, changeCurrent }: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React with Redux.
        </p>
      </header>
      <div className="Todo-App">
        <TodoForm currentTodo={currentTodo} changeCurrent={changeCurrent} />
        <TodoList todos={todos} currentTodo={currentTodo} />
      </div>
    </div>
  );
}

const mapStateToProps = (state: TodoState) => state
const ConnectedApp = connect(mapStateToProps)(App)
export default ConnectedApp
