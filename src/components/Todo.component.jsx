import React, { useState } from "react";
import InputComponent from "./Input.component";
import ListComponent from "./List.component";

const TodoComponent = () => {
  const [item, setItem] = useState({
    id: 0,
    item: "",
    isCompleted: false,
  });

  return (
    <div className="flex flex-col h-screen w-screen items-center my-10">
      <p className="font-medium mb-10 text-2xl ">
        Todo App with Redux Toolkit and Redux Thunk
      </p>
      <InputComponent item={item} setItem={setItem} />
      <ListComponent setItem={setItem} />
    </div>
  );
};

export default TodoComponent;
