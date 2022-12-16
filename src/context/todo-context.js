import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext({
  todos: "",
  setTodos: () => {},
  addTodoHandler: (todos) => {},
  todoStatus: {},
});

const TodoContextProvider = (props) => {
  const todosStorage = JSON.parse(localStorage.getItem("todos") || "[]");
  const [todos, setTodos] = useState(todosStorage);
  const [todoStatus, SetTodoStatus] = useState({});

  const addTodoHandler = (todos) => {
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    const totolTodos = todos.length;
    let todoDone = 0;
    todos.map((todo) => {
      if (todo.isChecked === true) {
        todoDone++;
      }
      return todoDone;
    });
    SetTodoStatus({
      done: todoDone,
      left: totolTodos - todoDone,
    });
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        setTodos: setTodos,
        addTodoHandler: addTodoHandler,
        todoStatus: todoStatus,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
