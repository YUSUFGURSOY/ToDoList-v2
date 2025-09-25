import { useState } from 'react'

import './App.css'
import TodoCreate from './Components/todoCreate'
import Pattern from './Components/Pattern'
import Todo from './Components/Todo'
import TodoList from './Components/todoList'




function App() {

  const [todos, setTodos] = useState([]);
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);




  };



  return (
    <>
      <Pattern />

      <div> <TodoCreate onCreateTodo={createTodo} todos={todos} onDelete={removeTodo} /></div>


    </>
  )
}

export default App
