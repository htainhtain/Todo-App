import React, { useState, useEffect } from "react";

import Textarea from "../../Textarea/Textarea";
import TodoListFooter from "./TodoListFooter/TodoListFooter";

import CheckButton from "../../Ui/CheckButton/CheckButton";
import TodoCard from "../../Ui/TodoCard.js";
import TodoListCard from "../../Ui/TodoListCard";
import DeleteIconMui from "../../Ui/Icons/DeleteIconMui";
import EditIconMui from "../../Ui/Icons/EditIconMui";


const TodoLists = (props) => {
  const [todoStatus, SetTodoStatus] = useState({});

  useEffect(() => {
    const totolTodos = props.todos.length;
    let todoDone = 0;
    props.todos.map((todo) => {
      if (todo.isChecked === true) {
        todoDone++;
      }
      return todoDone;
    });
    SetTodoStatus({
      done: todoDone,
      left: totolTodos - todoDone,
    });
  }, [props.todos]);

  //check toggle
  const handleCheckChange = (e) => {
    const todo = e.currentTarget.parentElement.parentElement.parentElement;
    const index = todo.getAttribute("index");
    const todoChecked = todo[0].checked;
    const newTodos = props.todos.map((todo, todoIndex) => {
      if (todoIndex === parseInt(index)) {
        return { ...todo, isChecked: todoChecked };
      }
      return todo;
    });
    props.setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  //delete the todo
  const handleDelete = (e) => {
    const todo = e.currentTarget.parentElement.parentElement;
    const index = todo.getAttribute("index");
    const todoToRemove = [props.todos[index]];
    const newTodos = props.todos.filter(
      (element) => !todoToRemove.includes(element)
    );
    props.setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
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
    const newTodos = props.todos.map((todo, todoIndex) => {
      if (todoIndex === parseInt(index)) {
        return { ...todo, todo: newText };
      }
      return todo;
    });
    props.setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <TodoListCard>
      {props.todos.map((element, index) => {
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
      <TodoListFooter todoStatus={todoStatus} />
    </TodoListCard>
  );
};

export default TodoLists;
