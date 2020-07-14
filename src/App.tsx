import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList, { Todo } from './components/TodoList';

export interface AppProps {
  todos: Todo[]
}

function App({ todos }: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React with Redux.
        </p>
      </header>
      <div className="Todo-App">
        <TodoForm />
        <TodoList todos={todos}/>
      </div>
    </div>
  );
}

export default App;
