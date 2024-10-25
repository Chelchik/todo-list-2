import React from 'react'
import { useState } from 'react';

function TodoForm({onAdd}) {
    const [text, setText] = useState("");
    
    const inputValue = (e) => {
        setText(e.target.value)
    };

    const submitFucn = (e) => {
        e.preventDefault()
        onAdd(text)
        setText("")
    };

  return (
    <form onSubmit={submitFucn}>
        <input type="text" placeholder="Add todo" id="addInput" onChange={inputValue} value={text}/>

        <input type="submit" value="Add" id="submit" />
    </form>
  )
}

export default TodoForm;