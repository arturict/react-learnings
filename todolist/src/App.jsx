import TodoInput from "./components/TodoInput";
import TodoCard from "./components/TodoCard";
import TodoList from "./components/TodoList";
import { useState } from "react";
function App() {

  const [todos, setTodos] = useState([
    "go to the gym",
    "eat more fruits",
    "do more",
  ]);

  function handleAddTodo(newTodo) {
    return null
  }

  return (
    <>
      <main>
        <TodoInput />
        <TodoList todos={todos} />
      </main>
    </>
  );
}

export default App;
