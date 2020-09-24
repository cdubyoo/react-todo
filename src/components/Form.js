import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    // here i can write js code and function
    const inputTextHandler = (e) => {
        setInputText(e.target.value); //e = event, tells us what happened in the input
    };
    const submitTodoHandler = (e) => {
        e.preventDefault(); // prevent refresh
        setTodos([ 
            ...todos, //pass the old todos
            {text: inputText, completed: false, id: Math.random() * 1000 } // create object with the state and random id
        ]);
        setInputText("") //empty string after input
    };
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return(
        <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" /> 
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;