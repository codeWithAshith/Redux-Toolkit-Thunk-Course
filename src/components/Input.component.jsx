import React from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../store/features/todoSlice";

const InputComponent = ({ item, setItem }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo..."
        className="border px-2 mx-2 rounded"
        value={item?.item}
        onChange={(e) => {
          setItem({ ...item, item: e.target.value });
        }}
      />
      <button
        className="border rounded px-2 bg-blue-500 text-white"
        onClick={() => {
          if (item.id === 0) {
            dispatch(
              addTodo({
                ...item,
                id: Date.now(),
              })
            );
          } else {
            dispatch(updateTodo(item));
          }
          setItem({
            id: 0,
            item: "",
            isCompleted: false,
          });
        }}
      >
        {item.id === 0 ? "Add Todo" : "Edit Todo"}
      </button>
    </div>
  );
};

export default InputComponent;
