import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';
import TodoFooter from './components/TodoFooter';

function App() {
  const [todos, setTodos] = useState([
    {id:1, title: "buy bread", isCompleted: false},
    {id:2, title: "buy bread", isCompleted: false},
    {id:3, title: "eat bread", isCompleted: false}
  ])

  let lastTodosId = todos.length;
  
  const addTodo = (newTodoText) => {setTodos([
    ...todos,
    {
      id: ++lastTodosId,
      title: newTodoText,
      isCompleted: false
    }
  ])}

  const deleteTodo = (id) => {
   setTodos(todos.filter((todo) => todo.id !== id))
  }

  const checkTodo = (nextTodo) => {
    setTodos(todos.map(todo => {
      if (todo.id === nextTodo.id) {
        return nextTodo;
      } else {
        return todo;
      }
    }));
  }

  const clearCompleted = () => {
  }

  return (
    <div className="root">
      <div className='cont'>
      <TodoForm onAdd={addTodo}/>

      <TodoList todos={todos} onDelete={deleteTodo} onCheck={checkTodo}/>
      
    <TodoFooter todos={todos} clearCompleted={() => {
      setTodos(todos.filter((todo) => !todo.isCompleted))
    }}/>
      </div>
    </div>
  );
}

export default App;
