import React from "react";
import styles from "./todo-display.module.css";
import Todo from "../Todo";
import EditTodoForm from "../EditTodoForm";

const TodoDisplay = ({
  todos,
  toggleComplete,
  deleteTodo,
  editTodo,
  editTask,
}) => {
  return (
    <div className={styles.todo_display}>
      {todos.map((todo, key) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            edit
            Todo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoDisplay;
