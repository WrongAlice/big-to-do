import React from "react";
import './ToDo.css';



export default function Todo( {todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id);
    }
    return (
        <div className="todo">
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
             {todo.name}
</label>
            </div>
    )
}