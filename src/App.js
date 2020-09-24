import React, { useState, useEffect } from 'react';
import './App.css';
// importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

// UI in react updates based on state !!!


function App() {
  // state stuff
  const [inputText, setInputText] = useState(""); // we want to return empty string after input
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  // run once when app starts, get local storage
  useEffect(() => {
    getLocalTodos();
  }, []);

  // use effect run function everytime value hits
  useEffect(() => {
    filterHandler(); 
    saveLocalTodos(); // save to local storage
  }, [todos, status]);


  // functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true)) //check for completed todos
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false)) //check for incomplete todos
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
      <h1>Chung's React To-Do List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList 
      setTodos={setTodos} 
      todos={todos} 
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
