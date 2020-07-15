import React from 'react';

interface TodoItemProps {
    id: number,
    name: string,
    isComplete: boolean,
}

const TodoItem = ({ id, name, isComplete }: TodoItemProps) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete} /> {name}
    </li>
)

export class Todo {
    constructor(public id: number, public name: string, public isComplete: boolean) { }
}

export interface TodoListProps {
    todos: Todo[],
    currentTodo: string
}

export default ({ todos }: TodoListProps) => (
    <div className="Todo-List">
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </ul>
    </div>
)