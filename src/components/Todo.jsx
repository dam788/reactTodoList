import React, { useState, useRef, useEffect } from "react";
import {
  completeTodo,
  deleteTodo,
  editMode,
  editTodo,
} from "../actions/todoActions";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(todo.label);
  const myInput = useRef();

  const handlerChecked = () => dispatch(completeTodo(todo.id));

  const handlerDelete = () => dispatch(deleteTodo(todo.id));

  const handlerEdit = () => dispatch(editMode(todo.id));

  const handlerEditTodo = (e) => {
    if (e.key === "Enter") {
      dispatch(editTodo(todo.id, inputValue));
      dispatch(editMode(todo.id));
    }
  };

  const handlerEditBlur = (e) => {
    dispatch(editTodo(todo.id, inputValue));
    dispatch(editMode(todo.id));
  };

  useEffect(() => {
    if (todo.editMode) {
      myInput.current.focus();
    }
  }, [todo.editMode]);

  return (
    <>
      <li className={todo.complete ? "todos-complete" : ""}>
        <input
          type="checkbox"
          cheked={todo.complete ? "checked" : ""}
          onChange={handlerChecked}
        />
        {todo.editMode ? (
          <input
            ref={myInput}
            type="text"
            onKeyPress={handlerEditTodo}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handlerEditBlur}
          />
        ) : (
          <span onDoubleClick={handlerEdit}>{todo.label}</span>
        )}
        <button type="button" onClick={handlerDelete}></button>
      </li>
    </>
  );
};

export default Todo;
