import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './styles.css';

function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
