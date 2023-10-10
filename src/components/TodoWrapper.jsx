import { useState } from "react";
import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import styles from "./todo-wrapper.module.css";
import TodoCount from "./todo-count/TodoCount";

import TodoHeader from "./todo-header/TodoHeader";
import TodoDisplay from "./todo-display/TodoDisplay";

// 1. Написать валидацию к полю сделать каcтомные сообщения об ошибках
// 2. Сделать более сложную логику подсчета задач что бы было больше вариантов текста
// 3. Отсортировать карточки по новизне. что бы новые были сверху
// 4. Окно под задачи с заданной высотой и скролом
// 5. Сделать кастомный скролл

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const id = new Date().getTime();
    setTodos([
      ...todos,
      { id, task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className={styles.todo_container}>
      {/* <TodoHeader /> */}
      <h1 className={styles.todo_title}>
        Твой список задач и всяких активностей на день
      </h1>

      <TodoForm addTodo={addTodo} />
      <TodoCount activeCount={activeCount} />
      <TodoDisplay
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        editTask={editTask}
      />
      {/* <TodoCount activeCount={activeCount} />
      {todos.map((todo, key) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )} */}
    </div>
  );
};

export default TodoWrapper;
