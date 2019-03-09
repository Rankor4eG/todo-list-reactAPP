import React, {Component} from 'react';

import './ItemFilter.scss';

export class ItemFilter extends Component{
    buttons =[
        this.createTodoButton('all', 'All'),
        this.createTodoButton('active', 'Active'),
        this.createTodoButton('done', 'Done'),
    ];

    createTodoButton(name, label){
        return {name, label }   
    }

    render(){
        const { filter, onFilterChange } =this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const classNameButton = isActive ? 'btn-info' : 'btn-outline-secondary'; 
            return <button type = "button" 
                            className = {`btn ${classNameButton}`}
                            key = {name}
                            onClick ={() => onFilterChange(name) }>{label}</button>
        })
        return <div className="btn-group">
                    {buttons}
                </div>
    }
}

export default ItemFilter;