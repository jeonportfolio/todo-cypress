import { useState } from "react";
import './App.css';
import TodoInput from "./TodoInput";
import { Todo } from "./types";
import TodoList from "./TodoList";


function App() {
 
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: string) => {
      setTodos( prevTodos => [
        ...prevTodos,
        {
          id: todos.length + 1,
          text: newTodo,
          done: false
        }
      ])
  };

  const toggleTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo;
    }))
  }

  return (
    <div>
        <TodoInput onAddTodo={addTodo}/>
        <TodoList todos={todos} onToggleTodo={toggleTodo}/>
    </div>
  );
}

export default App
