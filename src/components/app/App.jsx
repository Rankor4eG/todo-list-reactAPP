import React, { Component } from 'react';

import TodoHeader from '../todoHeader/TodoHeader';
import TodoList from '../todoList/TodoList';
import ItemFilter from '../itemFilter/ItemFilter';
import TodoSearch from '../todoSearch/TodoSearch';

import './App.scss'

const  Todo = () =>{
  const todoData = [
    { label: 'Task 1 1', important: false, id: 1},
    { label: 'Task 2 Lorem Loremm', important: true, id: 2},
    { label: 'Task 3 Lorem Loremm', important: false, id: 3},
    { label: 'Task 4 Lorem Loremm', important: false, id: 4},
    { label: 'Task 5 Lorem Loremm', important: true, id: 5},
    { label: 'Task 6 Lorem Loremm', important: false, id: 6},
  ];

  return (
    <div className="todo-app wrapper">
      <TodoHeader toDo ={1} done = {3}/>
      <div className="d-flex top-panel">
        <TodoSearch />
        <ItemFilter />
      </div>      
      <TodoList todos ={todoData}/>
    </div>
  );
};


class App extends Component {
  render() {
    return (
      <Todo />
    );
  }
}

export default App;
