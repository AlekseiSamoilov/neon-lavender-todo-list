import React from "react";
import { useState } from "react";
import styles from "./todo-form.module.css";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className={styles.todo_form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.todo_input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className={styles.todo_btn}>
        Обновить планы
      </button>
    </form>
  );
};

export default EditTodoForm;
