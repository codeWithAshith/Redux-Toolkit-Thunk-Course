import axios from "../utils/config";

const apiModules = {
  getAllTodo: () => axios.get("/todos"),
  postTodo: (todo) => axios.post("/todos", todo),
  updateTodo: (todo) => axios.put(`/todos/${todo.id}`, todo),
  deleteTodo: (id) => axios.delete(`/todos/${id}`),
};

export default apiModules;
