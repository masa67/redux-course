import { Dispatch } from "react";
import { createTodo, getTodos, updateTodo, destroyTodo } from '../lib/todoServices'
import { showMessage } from './messages'
import { ApplicationState } from '../store'

export class Todo {
    constructor(public id: number, public name: string, public isComplete: boolean) { }
}

export class TodoState {
    constructor(public todos: Todo[], public currentTodo: string) { }
}

export enum TodoActionType {
    TODO_ADD = 'TODO_ADD',
    TODOS_LOAD = 'TODOS_LOAD',
    CURRENT_UPDATE = 'CURRENT_UPDATE',
    TODO_REPLACE = 'TODO_REPLACE',
    TODO_REMOVE = 'TODO_REMOVE'
}

export interface TodoAction {
    type: TodoActionType,
    payload: Todo[] | Todo | string | number
}

export enum FilterType {
    ALL = 'ALL',
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED'
}

const initState = {
    todos: [],
    currentTodo: ''
};

export const updateCurrent = (val: string) => ({ type: TodoActionType.CURRENT_UPDATE, payload: val })
export const loadTodos = (todos: Todo[]) => ({ type: TodoActionType.TODOS_LOAD, payload: todos })
export const addTodo = (todo: string) => ({ type: TodoActionType.TODO_ADD, payload: todo })
export const replaceTodo = (todo: Todo) => ({ type: TodoActionType.TODO_REPLACE, payload: todo })
export const removeTodo = (id: number) => ({ type: TodoActionType.TODO_REMOVE, payload: id })

export const fetchTodos = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(showMessage('Loading Todos'))
        getTodos()
            .then(todos => {
                dispatch(showMessage(''));
                return dispatch(loadTodos(todos));
            })
    }
}

export const saveTodo = (name: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(showMessage('Saving Todo'))
        createTodo(name)
            .then(res => {
                dispatch(showMessage(''));
                dispatch(addTodo(res));
            })
    }
}

export const toggleTodo = (id: number) => {
    return (dispatch: Dispatch<any>, getState: () => ApplicationState) => {
        const { todos } = getState().todo
        const todo = todos.find(t => t.id === id)
        if (todo) {
            dispatch(showMessage('Saving Todo update'))
            const toggled = { ...todo, isComplete: !todo.isComplete }
            updateTodo(toggled)
                .then(res => {
                    dispatch(showMessage(''));
                    dispatch(replaceTodo(res));
                })
        }
    }
}

export const deleteTodo = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(showMessage('Removing Todo'))
        destroyTodo(id)
            .then(() => {
                dispatch(showMessage(''));
                dispatch(removeTodo(id))
            })
    }
}

export const getVisibleTodos = (todos: Todo[], filter: FilterType) => {
    switch (filter) {
        case FilterType.ACTIVE:
            return todos.filter(t => !t.isComplete);
        case FilterType.COMPLETED:
            return todos.filter(t => t.isComplete);
        default:
            return todos
    }
}

export default (state: TodoState = initState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionType.TODO_ADD:
            return { ...state, currentTodo: '', todos: state.todos.concat(action.payload as Todo) }
        case TodoActionType.TODOS_LOAD:
            return { ...state, todos: action.payload as Todo[] }
        case TodoActionType.CURRENT_UPDATE:
            return { ...state, currentTodo: action.payload as string }
        case TodoActionType.TODO_REPLACE:
            return {
                ...state,
                todos: state.todos.map(t => t.id === (action.payload as Todo).id ? action.payload : t)
            }
        case TodoActionType.TODO_REMOVE:
            return {
                ...state,
                todos: state.todos.filter(t => t.id !== action.payload)
            }
    }

    return state
}