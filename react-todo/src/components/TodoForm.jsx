import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const TodoForm = ({ setTodos, todos }) => {
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    if (todoValue === "") {
      toast.error("Please enter a todo");
    } else if (todos.includes(todoValue)) {
      toast.error("To do already exist!");
    } else if (todoValue.length < 3) {
      toast.error("todo must be at least 3 characters long!");
    } else {
      const newTodo = todoValue.trim();
      setTodos([...todos, newTodo]);
      toast.success("Todo Added!");
    }
  };
  return (
    <form action="" id="tod o-form">
      <input
        type="text"
        id="form-input"
        placeholder="Please Enter Your To Do"
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
          setTodoValue("");
        }}
      >
        ADD
      </button>
    </form>
  );
};

export default TodoForm;
