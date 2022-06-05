import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';

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
  const todo = newTodos.find(todo => todo.id === id);
  todo.complete = !todo.complete;
  setTodos(newTodos);

}
function handleAddTodo(e) {
  const name = todoNameRef.current.value   
  if (name === '') return
  setTodos(prevTodos => {
    return [...prevTodos, { id:1, name: name, complete: false }]
  })
  todoNameRef.current.value = null 

}

function handleClearTodos () {
  const newTodos = todos.filter(todo => !todo.complete)
  setTodos(newTodos)
}

  return (
    <div >
     
     <TodoList todos ={todos} toggleTodo={toggleTodo}/>
     <input ref={todoNameRef} type="text" /> 
     <button onClick={handleAddTodo} type="submit"> Add It </button>
     <button onClick={handleClearTodos}> Clear It </button>
     <div> {todos.filter(todo => !todo.complete).length} left to do </div>
    </div>
  );
}

export default App;
