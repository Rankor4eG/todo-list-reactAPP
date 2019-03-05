import React from 'react';

import './TodoListItem.scss'

const TodoListItem = ({label, important = false}) =>{
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal',
    };
    return <span className="todo-list-item">
        <span className="todo-list-item__label" style ={style}>{ label }</span>
        <span>
            <button type="button" className="btn btn-outline-danger btn-sm flex-d">  
                <i className="fa fa-trash-o"/>
            </button>
            <button type="button" className="btn btn-outline-success btn-sm flex-d">
                <i className="fa fa-exclamation"/>
            </button>
        </span>
    </span>;
};

export default TodoListItem;