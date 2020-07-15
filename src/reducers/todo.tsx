import { Reducer } from "react";

export class Todo {
    constructor(public id: number, public name: string, public isComplete: boolean) { }
}

export class TodoState {
    constructor(public todos: Todo[], public currentTodo: string) { }
}

export enum TodoActionType {
    TODO_ADD = 'TODO_ADD',
    CURRENT_UPDATE = 'CURRENT_UPDATE'
}

export interface TodoAction {
    type: TodoActionType,
    payload: Todo | string
}

const initState = {
    todos: [
        { id: 1, name: 'create a store', isComplete: true },
        { id: 2, name: 'load state through the store', isComplete: true },
        { id: 3, name: 'handle state changes with redux', isComplete: false },
    ],
    currentTodo: ''
};

export default (state: TodoState = initState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionType.TODO_ADD:
            if (action.payload instanceof Todo) {
                return { ...state, todos: state.todos.concat(action.payload) }
            }
            break;
        case TodoActionType.CURRENT_UPDATE:
            if (typeof action.payload === 'string') {
                return { ...state, currentTodo: action.payload}
            }
    }

    return state
}