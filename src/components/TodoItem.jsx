import { useState } from 'react';

function TodoItem({todo, onDelete, onCheck}) {
  return (
    <div className="todo">
      <input type="checkbox" id={todo.id} checked={todo.isCompleted} onChange={e => onCheck({
            ...todo, 
            isCompleted: e.target.checked
        })}/>

      <label htmlFor={todo.id}>{todo.title}</label>

      <button className="deleteBtn" onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
