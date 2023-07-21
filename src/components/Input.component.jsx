import React from "react";

const InputComponent = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo..."
        className="border px-2 mx-2 rounded"
      />
      <button className="border rounded px-2 bg-blue-500 text-white">
        Add Todo
      </button>
    </div>
  );
};

export default InputComponent;
