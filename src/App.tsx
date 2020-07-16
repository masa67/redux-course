import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList, { Todo } from './components/TodoList';
import { render } from 'react-dom';

export interface AppProps {
  todos: Todo[],
  currentTodo: string,
  changeCurrent: (val: string) => void
}

class App extends Component<AppProps, {}>
{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to React with Redux.
        </p>
        </header>
        <div className="Todo-App">
          <TodoForm currentTodo={this.props.currentTodo} changeCurrent={this.props.changeCurrent} />
          <TodoList todos={this.props.todos} currentTodo={this.props.currentTodo} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppProps) => state
const ConnectedApp = connect(mapStateToProps)(App)
export default ConnectedApp
