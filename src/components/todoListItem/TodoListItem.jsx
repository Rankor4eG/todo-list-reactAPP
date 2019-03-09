import React, { Component } from 'react';

import './TodoListItem.scss'
class TodoListItem extends Component{

  
    render(){
        const { label, onDeleted, 
                onToggleImportant, 
                onToggleDone, 
                done, important } = this.props
        
        let classNames = 'todo-list-item'

        if(done){
            classNames += ' done'
        }
        if(important){
            classNames += ' important'
        }       

        return <span className={classNames}>
                    <span className="todo-list-item__label" 
                        onClick={ onToggleDone }>
                        { label }
                    </span>
                    <span>
                        <button type="button" 
                        className="btn btn-outline-danger btn-sm flex-d"
                        onClick = {onDeleted}
                        >  
                            <i className="fa fa-trash-o"/>
                        </button>
                        <button type="button" 
                        className="btn btn-outline-success btn-sm flex-d"
                        onClick={onToggleImportant}>
                            <i className="fa fa-exclamation"/>
                        </button>
                    </span>
                </span>;
    }
}

 

export default TodoListItem;