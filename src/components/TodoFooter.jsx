import React from 'react'
import { useState } from 'react';

function TodoFooter({todos, clearCompleted}) {
  const completedTodos = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="todoFooter">
        <span>{completedTodos}/{todos.length}</span>

        <button className="clearCompletedBtn" onClick={clearCompleted}>Clear completed</button>
    </div>
  )
}

export default TodoFooter;