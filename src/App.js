import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuidv4';
import './App.css';

const LOCAL_STORAGE_KEY = 'todoAp.todos'



function App() {
const [todos, setTodos] = useState([]);
const todoNameRef = useRef();




useEffect(() => { //this function will persist the todos across page reload and saves to local storage
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
if(storedTodos) setTodos(storedTodos)
}, [])



useEffect (() => { //this gets the todos from local storage and sets them to the state
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos])

function toggleTodo(id){
  const newTodos = [...todos];
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}

function handleAddTodo(e) {
  const name = todoNameRef.current.value   
  if (name === '') return
  setTodos(prevTodos => {
    return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
  })
  todoNameRef.current.value = null 

}

function handleClearTodos () {
  const newTodos = todos.filter(todo => !todo.complete)
  setTodos(newTodos)
}
  return (
   
    <div className='Main'>
       <div className="header">
      <h1> to-do list</h1>
      </div>
      <div className="App">
   
  
     <input ref={todoNameRef} type="text" /> 
     <div className="button-box">
     <button onClick={handleAddTodo} type="submit"> Add Item </button>
     <button onClick={handleClearTodos}> Clear Item </button>
    </div>
    
    </div>
    <div className="todo-list">
    {/* <div> {todos.filter(todo => !todo.complete).length} left to do </div> */}
      <h3> to do's </h3>
     <TodoList todos ={todos} toggleTodo={toggleTodo}/>
      </div>
    </div>
  );
}

export default App;