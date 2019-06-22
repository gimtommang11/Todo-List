//투두리스트의 겉 스타일을을 적어줍니다 

import React, { Component } from "react";
import './style';
import {Title, Input, List} from './style';

class TodoTemplet extends Component{
  render(){
    return(
      <div>
        <Title> 오늘 할일</Title>
      </div>
    );
  }
}

export default TodoTemplet;