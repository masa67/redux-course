import React from 'react'
import { Todo } from './TodoList'

export interface TodoFormProps {
    currentTodo: string,
    changeCurrent: (val: string) => void,
}

export default ({currentTodo, changeCurrent}: TodoFormProps) => {
    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const val = evt.target.value
        changeCurrent(val);
    }

    return (
        <form>
            <input type="text" onChange={handleInputChange} value={currentTodo}/>
        </form>
    )
}