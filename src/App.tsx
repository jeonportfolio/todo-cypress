import { PropsWithChildren, useState } from "react";
import './App.css';
import TodoInput from "./TodoInput";
import { Todo } from "./types";
import TodoList from "./TodoList";

function App() {
  return <Layout><TodoContainer/></Layout>;
  
}

function Layout({children}: PropsWithChildren) {

  const [direction, setDirection] = useState<'row' | 'column'>('column');

  return (
    <div style={{display: 'flex', flexDirection: direction}}>
      <div style={{padding: '20px'}}>
        <h1>Todo app</h1>
          <button 
            onClick={() => 
              setDirection(prev => (prev === 'row' ? 'column' : 'row'))
            }
          >
            레이아웃 변경
          </button>
        <TodoContainer/>
      </div>
      {children}
    </div>
  )
}


function TodoContainer() {
 
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
