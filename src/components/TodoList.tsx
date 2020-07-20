import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { fetchTodos, getVisibleTodos, FilterType } from '../reducers/todo';
import { ApplicationState } from '../store';

export class Todo {
    constructor(public id: number, public name: string, public isComplete: boolean) { }
}

export interface TodoListProps {
    todos: Todo[],
    fetchTodos: () => void,
}

export interface TodoListOwnProps {
    filter: string
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
    (state: ApplicationState, ownProps: TodoListOwnProps) => {
        let filter = ownProps.filter ? ownProps.filter.toUpperCase() : 'ALL';
        return { todos: getVisibleTodos(state.todo.todos, FilterType[filter as keyof typeof FilterType])}
    },
    { fetchTodos }
)(TodoList)