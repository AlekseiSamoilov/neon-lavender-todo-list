import React from "react";
import { useState } from "react";
import styles from "./todo-form.module.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className={styles.todo_form} onSubmit={handleSubmit}>
      <input
        className={styles.todo_input}
        type="text"
        value={value}
        placeholder="Что будем делать сегодня?"
        onChange={(e) => setValue(e.target.value)}
        // required={true}
      />
      <button type="submit" className={styles.todo_btn}>
        Добавить цель
      </button>
    </form>
  );
};

export default TodoForm;
