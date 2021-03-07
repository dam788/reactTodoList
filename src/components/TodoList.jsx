import React from "react";
import Todo from "./Todo.jsx";

const TodoList = ({ todos }) => {
  return (
    <ul className="todos-list">
      {todos?.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
