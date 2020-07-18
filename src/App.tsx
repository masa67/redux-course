import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
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
        <TodoList />
      </div>
    </div>
  );
}

export default App