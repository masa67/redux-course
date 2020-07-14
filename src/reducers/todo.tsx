import { Reducer } from "react";

export class Todo {
    constructor(public id: number, public name: string, public isComplete: boolean) {}
}

export class TodoState {
    constructor(public todos: Todo[]) {}
}

export enum TodoActionType {
    TODO_ADD = 'TODO_ADD'
}

export interface TodoAction {
    type: TodoActionType,
    payload: Todo
}

const initState = new TodoState([]);

export default (state: TodoState = initState, action: TodoAction) =>{
    switch (action.type) {
        case TodoActionType.TODO_ADD:
            return { ...state, todos: state.todos.concat(action.payload)}
            break;
        default:
            return state
    }
}