import React, { useContext } from "react";

import { TodoContext } from "../../../context/todo-context";

import Textarea from "../../Textarea/Textarea";
import TodoListFooter from "./TodoListFooter/TodoListFooter";

import CheckButton from "../../Ui/CheckButton/CheckButton";
import TodoCard from "../../Ui/TodoCard.js";
import TodoListCard from "../../Ui/TodoListCard";
import DeleteIconMui from "../../Ui/Icons/DeleteIconMui";
import EditIconMui from "../../Ui/Icons/EditIconMui";

const TodoLists = () => {
  const context = useContext(TodoContext);

  //check toggle
  const handleCheckChange = (e) => {
    const todo = e.currentTarget.parentElement.parentElement.parentElement;
    const index = todo.getAttribute("index");
    const todoChecked = todo[0].checked;
    const newTodos = context.todos.map((todo, todoIndex) => {
      if (todoIndex === parseInt(index)) {
        return { ...todo, isChecked: todoChecked };
      }
      return todo;
    });
    context.addTodoHandler(newTodos);
  };

  //delete the todo
  const handleDelete = (e) => {
    const todo = e.currentTarget.parentElement.parentElement;
    const index = todo.getAttribute("index");
    const todoToRemove = [context.todos[index]];
    const newTodos = context.todos.filter(
      (element) => !todoToRemove.includes(element)
    );
    context.addTodoHandler(newTodos);
  };

  //focus on press edit the todo
  const handleEdit = (e) => {
    const todo = e.currentTarget.parentElement.parentElement;
    const textarea = todo[1];
    textarea.focus();
  };

  //handle text change in text area
  const handleTextChange = (e) => {
    const todo = e.currentTarget;
    const index =
      e.currentTarget.parentElement.parentElement.parentElement.getAttribute(
        "index"
      );
    const newText = todo.value;
    const newTodos = context.todos.map((todo, todoIndex) => {
      if (todoIndex === parseInt(index)) {
        return { ...todo, todo: newText };
      }
      return todo;
    });
    context.addTodoHandler(newTodos);
  };

  return (
    <TodoListCard>
      {context.todos.map((element, index) => {
        return (
          <TodoCard key={index} index={index}>
            <CheckButton
              isChecked={element.isChecked}
              handleCheckChange={handleCheckChange}
            />
            <Textarea
              todo={element.todo}
              handleTextChange={handleTextChange}
              isChecked={element.isChecked}
            />
            <EditIconMui handleEdit={handleEdit} />
            <DeleteIconMui handleDelete={handleDelete} />
          </TodoCard>
        );
      })}
      <TodoListFooter todoStatus={context.todoStatus} />
    </TodoListCard>
  );
};

export default TodoLists;
