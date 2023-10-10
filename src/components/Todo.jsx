import React from "react";
import styles from "./todo.module.css";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const handleClick = (e) => {
    if (
      e.target.classList.contains(`${styles.edit_icon}`) ||
      e.target.classList.contains(`${styles.delete_icon}`)
    ) {
      return;
    }
    toggleComplete(task.id);
  };
  return (
    <div
      className={`${styles.todo} ${task.completed ? styles.completed : ""}`}
      onClick={handleClick}
    >
      <p className={styles.todo_text}>{task.task}</p>
      <div className={styles.pics}>
        <div className={styles.edit_icon} onClick={() => editTodo(task.id)} />
        <div
          className={styles.delete_icon}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
