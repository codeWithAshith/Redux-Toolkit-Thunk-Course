import React from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/features/todoSlice";

const ListComponent = ({ setItem }) => {
  const dispatch = useDispatch();
  const todos = useSelector((reducer) => reducer.todoReducer.todos);

  return (
    <div className="flex flex-col items-center w-2/4 my-10">
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="border rounded flex flex-row items-center justify-between p-4 w-full mb-4"
          >
            <p>{todo.item}</p>
            <div className="flex flex-row gap-4">
              <div
                className="text-gray-900"
                onClick={() => {
                  setItem(todo);
                }}
              >
                <GrEdit />
              </div>
              <div
                className="text-red-500"
                onClick={() => {
                  dispatch(deleteTodo(todo.id));
                }}
              >
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
