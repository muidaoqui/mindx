import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Tabs from "./components/Tabs";

function App() {
  const [todos, setTodos] = useState([]);
  const [tab, setTab] = useState("All");

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
  };

  const deleteCompleted = () => {
    if (tab !== "Completed") return;
    setTodos(todos.filter(todo => !todo.done));
  };

  const filteredTodos = {
    All: todos,
    Active: todos.filter(todo => !todo.done),
    Completed: todos.filter(todo => todo.done),
  }[tab];

  return (
    <div className="max-w-md mx-auto mt-10 p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">#todo</h1>
      <Tabs currentTab={tab} setTab={setTab} />

      {tab !== "Completed" && <TodoInput onAdd={addTodo} />}

      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />

      {tab === "Completed" && filteredTodos.length > 0 && (
        <button
          className="bg-red-500 text-white mt-4 px-4 py-2 rounded hover:bg-red-600"
          onClick={deleteCompleted}
        >
          🗑 Delete all
        </button>
      )}
    </div>
  );
}

export default App;
