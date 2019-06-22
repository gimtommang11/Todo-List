//투두리스트를 모아 보여줍니다
import React, {Component} from "react";
import TodoInfo from './todoInfo';

class TodoInfoList extends Component{

  render(){
    const {todos ,toggleItem, removeIitem} = this.props;
    const todoList = todos.map(
      ({id, content, isChecked}) =>
      <TodoInfo 
        id = {id}
        content = {content}
        isChecked = {isChecked}
        toggleItem = {toggleItem}
        removeIitem = {removeIitem}
      />
    )
    return(
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoInfoList;