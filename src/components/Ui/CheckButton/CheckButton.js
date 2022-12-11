import React from "react";
import "./CheckButton.css";

const CheckButton = (props) => {
  return (
    <div className="todo-checkbox-button-container">
      <input
        type="checkbox"
        checked={props.isChecked}
        id="todo-checkbox-button"
        name="todo-checkbox"
        onChange={props.handleCheckChange}
      />
      <div className="checkbox-button-check-mark"></div>
    </div>
  );
};

export default CheckButton;
