import React from "react";
import InputComponent from "./Input.component";
import ListComponent from "./List.component";

const TodoComponent = () => {
  return (
    <div className="flex flex-col h-screen w-screen items-center my-10">
      <p className="font-medium mb-10 text-2xl ">
        Todo App with Redux Toolkit and Redux Thunk
      </p>
      <InputComponent />
      <ListComponent />
    </div>
  );
};

export default TodoComponent;
