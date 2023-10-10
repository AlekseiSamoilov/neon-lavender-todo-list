import React from "react";
import styles from "./todo-count.module.css";

const TodoCount = ({ activeCount }) => {
  return (
    <div className={styles.count_container}>
      Сегодня {activeCount} {activeCount === 1 ? "задача" : "задач"}
    </div>
  );
};

export default TodoCount;
