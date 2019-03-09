import React, {Component} from 'react';

import './TodoSearch.scss'

export class TodoSearch extends Component{

  state = {
    term: ''
  };

  onSearchChange = (e) =>{
    const term = e.target.value;

    this.setState({
      term
    })
    this.props.onSearchChange({term});
  };

  render(){
    return (
      <input type="text" 
        placeholder="type to search" 
        className="search-input"
        value={this.state.term}
        onChange = {this.onSearchChange}/>
    )
  }
}

  export default TodoSearch;