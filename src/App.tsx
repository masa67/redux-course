import React from 'react';
import logo from './logo.svg';
import './App.css';

export class Todo {
  constructor(public id: number, public name: string, public isComplete: boolean) { }
}

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
        <form>
          <input type="text" />
        </form>
        <div className="Todo-List">
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                <input type="checkbox" defaultChecked={todo.isComplete} /> {todo.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
