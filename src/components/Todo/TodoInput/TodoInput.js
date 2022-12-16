import React, { useContext } from "react";
import { TodoContext } from "../../../context/todo-context";

import Textarea from "../../Textarea/Textarea";

import CheckButton from "../../Ui/CheckButton/CheckButton";
import FormUi from "../../Ui/FormUi";

import "./TodoInput.css";

const TodoInput = () => {
  const context = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isChecked = e.target[0];
    let todoTask = e.target[1];
    if (todoTask.value) {
      storeTodos({ isChecked: isChecked.checked, todo: todoTask.value });
    }
    isChecked.checked = false;
    todoTask.value = "";
  };

  const storeTodos = (todo) => {
    const addedTodos = [...context.todos, todo];
    context.addTodoHandler(addedTodos);
  };

  return (
    <FormUi handleSubmit={handleSubmit}>
      <CheckButton />
      <Textarea />
      <input type="submit" hidden />
    </FormUi>
  );
};

export default TodoInput;
