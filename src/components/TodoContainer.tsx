import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import useStore from "../useStore";
import { useEffect } from "react";



export default function TodoContainer() {
 
  const { todos, addTodo, toggleTodo, fetchTodos } = useStore();

  useEffect(() => {
    fetchTodos();
  },[fetchTodos])

  return (
    <div>
        <TodoInput onAddTodo={addTodo}/>
        <TodoList todos={todos} onToggleTodo={toggleTodo}/>
    </div>
  );
}