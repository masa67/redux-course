import { Reducer, Dispatch } from "react";
import { getTodos } from '../lib/todoServices'

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
export const fetchTodos = () => { 
    return (dispatch: Dispatch<TodoAction>) => {
        getTodos()
            .then(todos => dispatch(loadTodos(todos)))
    }
}

export default (state: TodoState = initState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionType.TODO_ADD:
            if (action.payload instanceof Todo) {
                return { ...state, todos: state.todos.concat(action.payload) }
            }
            break;
        case TodoActionType.TODOS_LOAD:
            return { ...state, todos: action.payload as Todo[]}
            break;
        case TodoActionType.CURRENT_UPDATE:
            if (typeof action.payload === 'string') {
                return { ...state, currentTodo: action.payload}
            }
    }

    return state
}