import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useSelector, useDispatch } from "react-redux";
import { deleteComplete } from "../actions/todoActions";

const TodoPages = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todosList);
  const completes = todoList.filter((todo) => todo.complete);

  const handlerCompletes = () => {
    dispatch(deleteComplete());
  };

  return (
    <div className="todos">
      <div className="todos-header">
        <h3 className="todos-title">LISTA DE TAREAS</h3>
        <hr />
        <div>
          <p>
            Tienes <span className="todos-count"></span> Items por
            hacer ?
          </p>
          {completes.length > 0 ? (
            <button
              type="button"
              className="todos-clear"
              onClick={handlerCompletes}
            >
              Borra Completados
            </button>
          ) : null}
        </div>
      </div>
      <TodoForm />
      <TodoList todos={todoList} />
    </div>
  );
};

export default TodoPages;
