import React from 'react';
// import components
import Todo from './ToDo';

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {/*for each todo, render out a todo component*/}
               {filteredTodos.map((todo) => (
                   <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id} 
                        todo={todo}
                        text={todo.text}
                    /> 
               ))}
            </ul>
        </div>
    );

}

export default ToDoList;