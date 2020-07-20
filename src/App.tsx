import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React with Redux.
        </p>
      </header>
      <Router>
        <div className="Todo-App">
          <Message />
          <TodoForm />
          <TodoList />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App