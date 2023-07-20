/* eslint-disable react/prop-types */
import { useState } from "react";

export const TodoCreate = (props) => {
  const { createTodo } = props;

  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    console.log(title);
    setTitle("");

    if (title.trim().length > 0) {
      createTodo(title);
      return setTitle("");
    }
  };

  return (
    <form
      className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8"
      onSubmit={handleSubmitAddTodo}
    >
      <span className="rounded-full border-2 w-3 inline-block h-3"></span>
      <input
        type="text"
        className="w-full text-gray-400 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
    </form>
  );
};
