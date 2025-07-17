import { ChangeEvent } from "react";

interface checkboxProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}


export default function ({ id, label, checked, onChange }: checkboxProps) {
    return (
        <>
            <input
                id={id} 
                type="checkbox" 
                checked={checked} 
                onChange={onChange}
            />
              <label htmlFor={id}>{label}</label>
        </>
    )
}