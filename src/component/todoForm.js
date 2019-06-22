//투두리스트 입력/양식
import React, { Component } from 'react'

class TodoForm extends Component{           //클래스 이름은 무조건 대문자!(안그러면 html 로 받아들임)
    
    render(){
        return(
            <div>
                <input
                    placeholder="할일을 입력하세요" 
                    value = {this.props.input}    //보여지는값
                    onChange = {this.props.changeContent}
                 />
                 <button 
                    type='button'
                    onClick = {this.props.onCreate}
                    >등록</button>
            </div>
        );
    }
}

export default TodoForm;