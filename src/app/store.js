import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
