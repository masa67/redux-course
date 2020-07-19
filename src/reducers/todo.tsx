import { Dispatch } from "react";
import { createTodo, getTodos } from '../lib/todoServices'
import { showMessage } from './messages'

export class Todo {
    constructor(public id: number, public name: string, public isComplete: boolean) { }
}

export class TodoState {
    constructor(public todos: Todo[], public currentTodo: string) { }
}

export enum TodoActionType {
    TODO_ADD = 'TODO_ADD',
    TODOS_LOAD = 'TODOS_LOAD',
    CURRENT_UPDATE = 'CURRENT_UPDATE'
}

export interface TodoAction {
    type: TodoActionType,
    payload: Todo[] | Todo | string
}

const initState = {
    todos: [],
    currentTodo: ''
};

export const updateCurrent = (val: string) => ({type: TodoActionType.CURRENT_UPDATE, payload: val})
export const loadTodos = (todos: Todo[]) => ({type: TodoActionType.TODOS_LOAD, payload: todos})
export const addTodo = (todo: string) => ({type: TodoActionType.TODO_ADD, payload: todo})
export const fetchTodos = () => { 
    return (dispatch: Dispatch<TodoAction>) => {
        getTodos()
            .then(todos => dispatch(loadTodos(todos)))
    }
}
export const saveTodo = (name: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(showMessage('Saving Todo'))
        createTodo(name)
            .then(res => dispatch(addTodo(res)))
    }
}

export default (state: TodoState = initState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionType.TODO_ADD:
            return { ...state, currentTodo: '', todos: state.todos.concat(action.payload as Todo) }
        case TodoActionType.TODOS_LOAD:
            return { ...state, todos: action.payload as Todo[]}
        case TodoActionType.CURRENT_UPDATE:
            return { ...state, currentTodo: action.payload as string}
    }

    return state
}