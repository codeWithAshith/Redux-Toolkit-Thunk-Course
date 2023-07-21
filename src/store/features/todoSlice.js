import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 5,
      todo: "Task 5   ",
      isCompleted: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
