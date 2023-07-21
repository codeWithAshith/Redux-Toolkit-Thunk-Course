import React from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";

const ListComponent = () => {
  const todos = useSelector((reducer) => reducer.todoReducer.todos);

  console.log(todos);

  return (
    <div className="flex flex-col items-center w-2/4 my-10">
      {todos.map((todo) => {
        return (
          <div className="border rounded flex flex-row items-center justify-between p-4 w-full mb-4">
            <p>{todo.todo}</p>
            <div className="flex flex-row gap-4">
              <div className="text-gray-900">
                <GrEdit />
              </div>
              <div className="text-red-500">
                <RiDeleteBin6Line />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListComponent;
