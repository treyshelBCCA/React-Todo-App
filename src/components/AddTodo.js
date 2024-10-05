import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
    debugger;
    const [task, setTask] = useState('');
    const { addTodo } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTodo(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo-form">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add new task..."
                className="todo-input"
            />
            <button type="submit" className="add-button">Add</button>
        </form>
    );
};

export default AddTodo;
