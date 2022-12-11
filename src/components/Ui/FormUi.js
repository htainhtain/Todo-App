import React from "react";

import "./FormUi.css";

const FormUi = (props) => {
  return (
    <form className="todo-input-container" onSubmit={props.handleSubmit}>
      <div className="todo-input">{props.children}</div>
    </form>
  );
};

export default FormUi;
