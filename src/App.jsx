import { Header } from "./components/Header/Header";
import { TodoCreate } from "./components/TodoCreate/TodoCreate";
import { TodoComputed } from "./components/TodoComputed/TodoComputed";
import { TodoFilter } from "./components/TodoFilter/TodoFilter";
import { TodoList } from "./components/TodoList/TodoList";
import { useEffect, useState } from "react";

// const initialStateTodo = [
//   {
//     id: 1,
//     title: "Go to the gym",
//     completed: true,
//   },
//   {
//     id: 2,
//     title: "Complete online Javascript bluuweb curse",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "10 minutes meditation",
//     completed: false,
//   },
//   {
//     id: 4,
//     title: "Pick up groceries",
//     completed: false,
//   },
//   {
//     id: 5,
//     title: "Complete todo app on Frontend Mentor",
//     completed: false,
//   },
// ];

const initialStateTodo = JSON.parse(localStorage.getItem("todos")) || [];

export const App = () => {
  const [todos, setTodos] = useState(initialStateTodo);
  const [filter, setFilter] = useState("all");

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((x) => x.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((x) => (x.id == id ? { ...x, completed: !x.completed } : x))
    );
  };

  const clearTodo = () => {
    setTodos(todos.filter((x) => !x.completed));
  };

  const filterTodo = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((x) => !x.completed);
      case "completed":
        return todos.filter((x) => x.completed);
      default:
        return todos;
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const changeFilter = (filter) => setFilter(filter);

  const computedItemsLeft = todos.filter((x) => !x.completed).length;

  return (
    <div
      className="bg-no-repeat bg-gray-300 min-h-screen 
                    bg-[url(./assets/images/bg-mobile-light.jpg)] 
                    bg-contain 
                    dark:bg-gray-900 
                    dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] 
                    duration-1000 
                    
                    md:bg-[url(./assets/images/bg-mobile-light.jpg)] 
                    md:dark:md:bg-[url(./assets/images/bg-mobile-dark.jpg)]
                    transition-all"
    >
      <Header></Header>
      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo}></TodoCreate>

        <TodoList
          todos={filterTodo()}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        ></TodoList>

        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearTodo={clearTodo}
        ></TodoComputed>

        <TodoFilter changeFilter={changeFilter} filter={filter}></TodoFilter>
      </main>
      <footer className="text-center mt-8 dark:text-gray-400">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};
