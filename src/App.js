import React, { useState } from "react";
import TodoList from "./Component/TodoList";
import './Style.css'

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodos] = useState([
    { text: "On Complete", id: 1, isDone: true },
    { text: "On Pending", id: 2, isDone: false },
  ]);
  function markComplete(id, done) {
    const todo = todoList.find(({ id: todoId }) => id === todoId);
    todo.isDone = done;
    setTodos([...todoList]);
  }
  function handleChange(event) {
    setTodoText(event.target.value);
  }
  function createTodo(event) {
    event.preventDefault();
    setTodos([
      ...todoList,
      {
        id: Math.random(),
        text: todoText,
        isDone: false,
      },
    ]);
    setTodoText("");
  }
  function deleteTodo(id) {
    const index = todoList.find(({ id: itemId }) => id === itemId);
    todoList.splice(index, 1);
    setTodos([...todoList]);
  }
  return (
    <>
      <div className="App">
      <h1 className="heading">Task List</h1>
        <form className="main" onSubmit={createTodo}>
          <input className="input-box" type="text" value={todoText} onChange={handleChange} />
          <button className="addTask" type="submit">Add New Task</button>
        </form>
        <TodoList
          deleteTodo={deleteTodo}
          markComplete={markComplete}
          todoList={todoList}
        />
      </div>
    </>
  );
}
