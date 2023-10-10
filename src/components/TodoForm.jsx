import React from "react";
import { useState } from "react";
import styles from "./todo-form.module.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const [symbols, setSymbols] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      addTodo(value);
      setValue("");
      setIsValid(false);
      setErrorMessage("");
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (newValue.trim() === "") {
      setIsValid(false);
      setErrorMessage("Заметка не может быть пустой");
    } else if (newValue.length > 50) {
      setIsValid(false);
      setErrorMessage("Максимальная длина заметки 58 символов");
    } else if (newValue.length < 3) {
      setIsValid(false);
      setErrorMessage("Минимальная длина заметки 3 символа ");
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
  };

  return (
    <form className={styles.todo_form} onSubmit={handleSubmit}>
      <input
        className={styles.todo_input}
        type="text"
        value={value}
        placeholder="Что будем делать сегодня?"
        onChange={(e) => {
          setValue(e.target.value);
          handleChange(e);
        }}
      />
      {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
      <button
        disabled={!isValid}
        type="submit"
        className={`${styles.todo_btn} ${
          !isValid ? styles.todo_btn_disabled : ""
        }`}
      >
        Добавить цель
      </button>
    </form>
  );
};

export default TodoForm;
