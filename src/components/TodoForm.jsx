import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";

const TodoForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const blur = () => inputRef.current.blur();
  const reset = () => (inputRef.current.value = "");
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line
  const handlerSubmit = (e) => {
    e.preventDefault();
    const { value: valueRef } = inputRef.current;
    if (valueRef === "") {
      blur();
      return false;
    }
    dispatch(addTodo(inputValue));
  };

  useEffect(() => {
    if (handlerSubmit) {
      reset();
    }
  }, [handlerSubmit]);

  return (
    <>
      <form
        className="todos-form"
        name="todos"
        onSubmit={handlerSubmit}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Escribe una tarea"
          name="todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </>
  );
};

export default TodoForm;
