import TodoItem from './TodoItem';
import { useState } from 'react';

function TodoList({todos, onDelete, onCheck}) {
  return (
    <div className="todo-list">
        {
            todos.map((todo) => {
                return (
                    <TodoItem todo={todo} onDelete={onDelete} onCheck={onCheck} key={todo.id} />
                )
            })
        }
    </div>
  );
}

export default TodoList;
