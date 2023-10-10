import React from "react";
import styles from "./todo-header.module.css";

export default function TodoHeader() {
  return (
    <div className={styles.header_container}>
      <div className={styles.icon} />
      <p className={styles.logo}>Neon Lavender To Do List</p>
    </div>
  );
}
