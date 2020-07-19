import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../reducers/todo';
import { ApplicationState } from '../store';

export interface TodoItemProps {
    id: number,
    name: string,
    isComplete: boolean,
    toggleTodo: (id: number) => void
}

const TodoItem = ({ id, name, isComplete, toggleTodo }: TodoItemProps) => (
    <li>
        <input type="checkbox"
            checked={isComplete}
            onChange={() => toggleTodo(id)} /> {name}
    </li>
)

export default connect(
    (state: ApplicationState) => ({}),
    { toggleTodo }
)(TodoItem)


