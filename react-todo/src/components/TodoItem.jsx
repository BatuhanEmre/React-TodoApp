import React from "react";

const TodoItem = ({ todo, deleteTodo, id }) => {
  return (
    <div className="todo-item">
      <p> {todo} </p>

      <i
        className="fa fa-times-circle"
        aria-hidden="true"
        onClick={() => {
          deleteTodo(id);
        }}
      ></i>
    </div>
  );
};

export default TodoItem;
