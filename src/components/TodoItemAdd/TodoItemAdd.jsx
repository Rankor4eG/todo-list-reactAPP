import React, {Component} from 'react';

import './TodoItemAdd.scss';

export class TodoItemAdd extends Component{
    state ={
        label: ''
    }
    
    onLabelChange = (e) =>{
        this.setState({
            label: e.target.value
        });
    };
    onSubmit = (e) =>{
        e.preventDefault()
        this.props.onAdd(this.state.label)
        this.setState({
            label: ''
        })
    }
    render(){
        return <form className="todoItemAdd"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control"
                        onChange={this.onLabelChange}
                        placeholder="What needs to be done?"
                        value={this.state.label}/>
                    <button 
                    className ="btn btn-success ">
                        Add Item
                    </button>
                 </form>
    }
}

export default TodoItemAdd;