import { useCallback } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "../hooks/useRedux";
import { addTodo, toggleTodo } from "../slices/todoSlice";


export default function TodoContainer() {
 
  const { todos } = useSelector(state => ({ todos: state.todo.todos }));
  const dispatch = useDispatch();  

  const handleAddTodo = useCallback((newTodo: string) => {
      dispatch(addTodo({ todo: newTodo }))
  }, [dispatch]);

  const handleToggleTodo = (id: number) => {
      dispatch(toggleTodo({ id }));
  };

  return (
    <div>
        <TodoInput onAddTodo={handleAddTodo}/>
        <TodoList todos={todos} onToggleTodo={handleToggleTodo}/>
    </div>
  );
}