import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiModules from "../../api/service";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

export const getAllTodos = createAsyncThunk("todos/getAll", async () => {
  console.log("res");
  const res = await apiModules.getAllTodo();
  console.log(res);
  return res.data;
});

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, { rejectWithValue }) => {
    const res = await apiModules.deleteTodo(id);
    if (res.status === 200) {
      return id;
    } else {
      rejectWithValue("Not found");
    }
  }
);

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const res = await apiModules.postTodo(todo);
  return res.data;
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
  const res = await apiModules.updateTodo(todo);
  return res.data;
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllTodos.fulfilled, (state, { payload }) => {
      state.loading = false;
      console.log("payload", payload);
      state.todos = payload;
    });
    builder.addCase(getAllTodos.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message ?? "Failed to fetch todos.";
    });
    builder.addCase(deleteTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.todos = state.todos.filter((t) => t.id !== payload);
    });
    builder.addCase(deleteTodo.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message ?? "Failed to delete todo.";
    });
    builder.addCase(addTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.todos.push(payload);
    });
    builder.addCase(addTodo.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message ?? "Failed to add todo.";
    });
    builder.addCase(updateTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return payload;
        } else return todo;
      });
    });
    builder.addCase(updateTodo.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message ?? "Failed to update todo.";
    });
  },
});

export default todoSlice.reducer;
