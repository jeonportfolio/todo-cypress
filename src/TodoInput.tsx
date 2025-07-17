import { ChangeEvent, useState } from "react";

interface TodoInputProps {
    onAddTodo: (text: string) => void;
}


export default function TodoInput({ onAddTodo }: TodoInputProps) {
    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = () => {
        onAddTodo(newTodo);
        setNewTodo("");
    };

    return(
        <div>
          <input 
             type="text" 
             value ={newTodo} 
             onChange={(e: ChangeEvent<HTMLInputElement>) => 
                setNewTodo(e.currentTarget.value)
            }
          />
          <button onClick={addTodo}>추가</button>
        </div> 
    )
}