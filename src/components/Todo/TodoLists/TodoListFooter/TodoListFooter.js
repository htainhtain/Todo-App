import React from "react";

import './TodoListFooter.css'

const TodoListFooter = (props) => {
  return (
    <div className="todo-list-footer">
      <div className="todo-list-left">{props.todoStatus.left} items left</div>
      <div className="todo-list-done">{props.todoStatus.done} items done</div>
    </div>
  );
};

export default TodoListFooter;
