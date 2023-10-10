import React from "react";
import { useState } from "react";
import styles from "./todo-form.module.css";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      editTodo(value, task.id);
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
        Обновить планы
      </button>
    </form>
  );
};

export default EditTodoForm;

// const EditTodoForm = ({ editTodo, task }) => {
//   const [value, setValue] = useState(task.task);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     editTodo(value, task.id);
//     setValue("");
//   };

//   return (
//     <form className={styles.todo_form} onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className={styles.todo_input}
//         value={value}
//         placeholder="Обнови планы"
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button type="submit" className={styles.todo_btn}>
//         Обновить планы
//       </button>
//     </form>
//   );
// };

// export default EditTodoForm;
