import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../reducers/todo';
import { ApplicationState } from '../store';

export interface TodoItemProps {
    id: number,
    name: string,
    isComplete: boolean,
    toggleTodo: (id: number) => void
    deleteTodo: (id: number) => void
}

const TodoItem = ({ id, name, isComplete, toggleTodo, deleteTodo }: TodoItemProps) => (
    <li>
        <span className='delete-item'>
            <button onClick={() => deleteTodo(id)}>X</button>
        </span>
        <input type="checkbox"
            checked={isComplete}
            onChange={() => toggleTodo(id)} /> {name}
    </li>
)

export default connect(
    (state: ApplicationState) => ({}),
    { toggleTodo, deleteTodo }
)(TodoItem)


