import React from "react";

import "./TodoListCard.css";

const TodoListCard = (props) => {
  return <div className="todolist-card">{props.children}</div>;
};

export default TodoListCard;
