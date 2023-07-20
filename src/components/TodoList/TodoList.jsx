/* eslint-disable react/prop-types */
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = (props) => {
  const { todos, removeTodo, updateTodo } = props;
  return (
    <div className="bg-white rounded-t-md mt-8">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        ></TodoItem>
      ))}
    </div>
  );
};
