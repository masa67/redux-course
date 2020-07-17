import React from 'react'
import { connect } from 'react-redux'
import { Todo } from './TodoList'
import { TodoState, updateCurrent } from '../reducers/todo';

export interface TodoFormProps {
    currentTodo: string,
    updateCurrent: (val: string) => void,
}

const TodoForm = ({currentTodo, updateCurrent}: TodoFormProps) => {
    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const val = evt.target.value
        updateCurrent(val);
    }

    return (
        <form>
            <input type="text" onChange={handleInputChange} value={currentTodo}/>
        </form>
    )
}

export default connect(
    (state: TodoState) => ({ currentTodo: state.currentTodo }),
    { updateCurrent }
)(TodoForm)