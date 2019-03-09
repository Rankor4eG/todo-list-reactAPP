import React, { Component } from 'react';

import TodoHeader from '../todoHeader/TodoHeader';
import TodoList from '../todoList/TodoList';
import ItemFilter from '../itemFilter/ItemFilter';
import TodoSearch from '../todoSearch/TodoSearch';
import TodoItemAdd from '../TodoItemAdd/TodoItemAdd';

import './App.scss'


export class Todo extends Component{
  maxId =1;
  state = {
     todoData: [
      this.createTodoItem('To drink coffee.'),
      this.createTodoItem('Buy a pillow.'),
      this.createTodoItem('Look at the rainbow.'),
      this.createTodoItem('Balcony repair.'),
      this.createTodoItem('To read a book.'),
      this.createTodoItem('Go on a trip.'),      
    ], 
    term: '',
    // filter: 'active' // active, all, done
  }
  createTodoItem(label){
    return{
      label, 
      important: false, 
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) =>{
    this.setState(({todoData}) => {
      const index = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, index), 
        ...todoData.slice(index + 1),
      ];

       return{
         todoData: newArray
       };
    });
  }

  addItem =(text) =>{    
      const newItem = this.createTodoItem(text);

      if(text.length === 0){
        return this.todoData;
      }

      this.setState(({todoData}) => {
        const newArr = [
          ...todoData,
          newItem
        ];
        return{
          todoData: newArr
        };
      });
    
  }

  toggleProperty(arr, id, propName){
    const index = arr.findIndex((el) => el.id ===id);
      
      const oldItem = arr[index];
      const newItem = {...oldItem, 
                        [propName]: !oldItem[propName]};
      const newArray = [
        ...arr.slice(0, index), 
        newItem,
        ...arr.slice(index + 1),  
      ];
      return newArray;
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return{ 
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  };
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return{ 
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  };

  onSearchChange =(term) =>{
    this.setState(term);
  };

  search(items, term){
    if(term.length === 0){
      return items;
    }
    return items.filter((item) =>{
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  // filter(items, filter){
  //   switch(filter){
  //     case 'all':
  //       return items;
  //     case 'active':
  //       return items.filter((item) => !item.done);
  //     case 'done':
  //       return items.filter((item) => item.done);
  //     default:
  //       return items;
  //   }
  // }

  render(){
    const {todoData, term, /*filter*/} = this.state
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    const visibleItems = //this.filter(
      this.search(todoData, term); //,filter);

    return (
      <div className="todo-app wrapper">
        <TodoHeader toDo ={todoCount} done = {doneCount}/>
        <div className="d-flex top-panel">
          <TodoSearch 
          onSearchChange ={this.onSearchChange}/>
          <ItemFilter />
        </div>      
        <TodoList 
          todos ={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant = {this.onToggleImportant}
          onToggleDone ={this.onToggleDone}/>
        <TodoItemAdd onAdd={this.addItem}/>
      </div>
    );
  }
};


class App extends Component {
  render() {
    return (
      <Todo />
    );
  }
}

export default App;
