import React from "react";
import styles from "./todo-count.module.css";

const TodoCount = ({ activeCount }) => {
  let word = "задач";
  if (activeCount === 1) {
    word = "задача";
  } else if (activeCount >= 2 && activeCount <= 4) {
    word = "задачи";
  }
  return (
    <div className={styles.count_container}>
      Сегодня {activeCount} {word}
    </div>
  );
};

export default TodoCount;
