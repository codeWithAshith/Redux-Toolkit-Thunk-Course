import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TodoComponent from "./components/Todo.component";

const App = () => {
  return (
    <Provider store={store}>
      <TodoComponent />
    </Provider>
  );
};

export default App;
