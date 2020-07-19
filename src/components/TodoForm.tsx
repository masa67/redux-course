import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCurrent, saveTodo } from '../reducers/todo';
import { ApplicationState } from '../store'

export interface TodoFormProps {
    currentTodo: string,
    updateCurrent: (val: string) => void,
    saveTodo: (val: string) => void,
}

class TodoForm extends Component<TodoFormProps, {}> {
    handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const val = evt.target.value
        this.props.updateCurrent(val);
    }

    handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        this.props.saveTodo(this.props.currentTodo)
    }

    render() {
        const {currentTodo} = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleInputChange} value={currentTodo}/>
            </form>
        )
    }
}

export default connect(
    (state: ApplicationState) => ({ currentTodo: state.todo.currentTodo }),
    { updateCurrent, saveTodo }
)(TodoForm)