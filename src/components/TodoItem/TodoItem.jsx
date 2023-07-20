/* eslint-disable react/prop-types */
import { CheckIcon } from "../icons/CheckIcon";
import { CrossIcon } from "../icons/CrossIcon";

export const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;
  console.log();
  return (
    <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4">
      <button
        // className={`{$completed ? place-items-center grid rounded-full border-2 w-5 h-5 flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... : inline-block h-5 w-flex-none rounded-full border-2}`}
        className={
          completed
            ? `place-items-center grid rounded-full border-2 w-5 h-5 flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... `
            : `inline-block h-5 w-5 w-flex-none rounded-full border-2`
        }
        onClick={() => updateTodo(id)}
      >
        {completed && <CheckIcon></CheckIcon>}
      </button>
      <p className={completed ? `line-through` : `"text-gray-600 grow"`}>
        {title}
      </p>
      <button onClick={() => removeTodo(id)}>
        <CrossIcon></CrossIcon>
      </button>
    </article>
  );
};
