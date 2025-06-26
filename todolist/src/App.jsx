import TodoInput from "./components/TodoInput";
import TodoCard from "./components/TodoCard";
import TodoList from "./components/TodoList";
import { useState } from "react";


export default function App() {

  const [todos, setTodos] = useState([
   
  ]);

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    return
  }
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    })
    setTodos(newTodoList);
  }
  function handleEditTodo(todoIndex, newTodo) {
    return (
      <>
        <main>
          <TodoInput handleAddTodo={handleAddTodo} />
          <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} />
        </main>
      </>
    );
  }
}


