import React from "react";

import "./TodoCard.css";

const TodoCard = (props) => {
  return (
    <form className="todo-card-container" index={props.index}>
      <div className="todo-card">{props.children}</div>
    </form>
  );
};

export default TodoCard;
