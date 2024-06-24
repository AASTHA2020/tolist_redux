import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './features/todos/TodoList';

// Root component that combines TodoForm and TodoList
function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
