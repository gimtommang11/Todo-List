import React, { Component } from 'react';
import TodoInfoList from './component/todoInfoList';
import TodoForm from './component/todoForm';
import {Title, Todo} from './component/style';

class App extends Component {

  state = {
    input : '', 
    todos : [
      {id : 0, content : "asdf", isChecked : false},
   ],
  }

  changeContent = (e) =>{
    this.setState({
        input : e.target.value
    })  
}

handleCreate = () => {
  const { todos, input } = this.state;
  this.setState({
    todos: [
      ...todos,   //전개연산자  
      {
        id: todos.length,
        content: input,
        isChecked: false,
      }
    ],
    input : ""
  });
}

  toggleItem = (id) => {
    const {todos} = this.state;
    this.setState({
      todos : todos.map(item => item.id === id
        ? ({...item, isChecked : !item.isChecked})
        : item
        )
    })
    }

  removeIitem = (id) =>{
    const {todos} = this.state;
    this.setState({
      todos : todos.filter(todo => todo.id !== id )
    })
  }

  render(){
    return (
      <Todo>
        <Title>
          todo 
        </Title>
        <TodoForm 
          input = {this.state.input}
          changeContent = {this.changeContent}
          onCreate = {this.handleCreate}
        />
        <TodoInfoList 
          todos = {this.state.todos}
          toggleItem = {this.toggleItem}
          removeIitem = {this.removeIitem}
        />
      </Todo>
    );
  }
}
export default App;
