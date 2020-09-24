import React from 'react';

const Todo =({text,todo, todos,setTodos}) => {
    // events
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id)); // comparing clicked element to one on state
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){ // check if clicked element has the same id as one on state
                return {
                ...item, completed: !item.completed
                };
            }   
            return item;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" :''}`}>{text}</li> {/* check if todo has completed state as true, if so, toggle completed class */}
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;