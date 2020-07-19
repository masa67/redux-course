import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { fetchTodos } from '../reducers/todo';
import { ApplicationState } from '../store';

export class Todo {
    constructor(public id: number, public name: string, public isComplete: boolean) { }
}

export interface TodoListProps {
    todos: Todo[],
    fetchTodos: () => void,
}

class TodoList extends Component<TodoListProps, {}> {
    componentDidMount() {
        this.props.fetchTodos()
    }

    render() {
        return (
            <div className="Todo-List">
                <ul>
                    {this.props.todos.map(todo =>
                        <TodoItem key={todo.id} {...todo} />
                    )}
                </ul>
            </div>
        )
    }
}

export default connect(
    (state: ApplicationState) => ({ todos: state.todo.todos }),
    { fetchTodos }
)(TodoList)