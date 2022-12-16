import React from "react";

import TodoInput from "../Todo/TodoInput/TodoInput";
import TodoLists from "../Todo/TodoLists/TodoLists";

import "./Home.css";

const Home = () => {
  return (
    <section id="todo">
      <div className="todo-container">
        <div className="todo-content-container">
          <main>
            <header className="todo-container-title">
              <h1>TODO</h1>
            </header>
          </main>
          <TodoInput />
          <TodoLists />
        </div>
      </div>
    </section>
  );
};

export default Home;
