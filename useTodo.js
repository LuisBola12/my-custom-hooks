import { React, useEffect, useReducer } from "react";
import { todoReducer } from "./../08-useReducer/todoReducer";
export const useTodo = () => {
  const initalState = [];
  const initReducer = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };
  const [todos, dispatchTodo] = useReducer(
    todoReducer,
    initalState,
    initReducer
  );
  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add todo",
      payload: todo,
    };
    dispatchTodo(action);
  };
  const handleRemoveTodo = (id) => {
    const action = {
      type: "[TODO] Remove todo",
      payload: id,
    };
    dispatchTodo(action);
  };
  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle todo",
      payload: id,
    };
    dispatchTodo(action);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return {
    todos,
    todosCount: todos.length,
    pendingTodos: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  };
};
