import React, { useState } from "react";

import TodoInput from "../Todo/TodoInput/TodoInput";
import TodoLists from "../Todo/TodoLists/TodoLists";

import "./Home.css";

const Home = () => {
  const todosStorage = JSON.parse(localStorage.getItem("todos") || "[]");
  const [todos, setTodos] = useState(todosStorage);

  return (
    <section id="todo">
      <div className="todo-container">
        <div className="todo-content-container">
          <div className="todo-container-title">
            <h1>TODO</h1>
          </div>
          <TodoInput todos={todos} setTodos={setTodos} />
          <TodoLists todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </section>
  );
};

export default Home;
