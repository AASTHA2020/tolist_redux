import { createSlice } from '@reduxjs/toolkit';

// Initial state for todos
const initialState = [];

// Creates a slice for todos with reducers and actions
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

// Export the actions to be used in components
export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;

// Export the reducer to be added to the store
export default todosSlice.reducer;
