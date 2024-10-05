import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
    debugger;
    const { toggleTodo, deleteTodo } = useContext(TodoContext);

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleTodo(todo.id)} className="task">
                {todo.task}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                Delete
            </button>
        </li>
    );
};

export default TodoItem;
