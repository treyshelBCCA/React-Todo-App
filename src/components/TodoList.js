import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    debugger;
    const { todos } = useContext(TodoContext);

    return (
        <ul className="todo-list">
            {todos.length === 0 ? <p>No tasks yet!</p> : (
                todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
            )}
        </ul>
    );
};

export default TodoList;
