import React from "react";

import "./Textarea.css";

const Textarea = (props) => {
  return (
    <div className="todo-text-area">
      <input
        type="text"
        id="todo-text-area"
        name="todo-text-area"
        placeholder="Create a new todo....."
        value={props.todo}
        onChange={props.handleTextChange}
        className={props.isChecked ? "line-through" : ""}
      />
    </div>
  );
};

export default Textarea;
