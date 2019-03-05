import React from 'react';
import './TodoHeader.scss'

const TodoHeader = ({toDo, done}) =>{
  return <div className="todo-header d-flex">
    <h1 className="todo-header__headline">Todo list</h1>
    <h2 className="todo-header__info">{toDo} more to do, {done} done</h2>
  </div>  
};

export default TodoHeader;