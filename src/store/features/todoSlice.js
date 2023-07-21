import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 5,
      item: "Task 5",
      isCompleted: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos((todo) => todo.id !== action.todo.id);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
