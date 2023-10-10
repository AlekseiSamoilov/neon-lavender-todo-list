import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import TodoForm from "./components/TodoForm";
import TodoWrapper from "./components/TodoWrapper";
import TodoDisplay from "./components/todo-display/TodoDisplay";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoWrapper />
  </React.StrictMode>
);
