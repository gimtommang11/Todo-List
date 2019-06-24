//투두리스트 하나하나의 정보를 적어줍니다
//이 정보들은 todoForm에서 내려옵니다
import React, {Component} from 'react'
import './style';
import { Info, DeleteIcon, CheckedIcon, Contnet} from './style';

class TodoInfo extends Component{
static defaultProps = {
    id : 0,
    content:"할일입니다",
    isChecked : false,
}

    render(){
        const {id, isChecked, content, toggleItem, removeIitem} = this.props;
        return(
            <Info onClick = {() => toggleItem(id)} 
                 isChecked = {isChecked}>
                    
                <DeleteIcon onClick = {(e) => { 
                    e.stopPropagation();
                    removeIitem(id)}
                }>&times;</DeleteIcon>

                <Contnet isChecked = {isChecked}>{content}</Contnet>

                <div>
                    {isChecked && <CheckedIcon>&#x2713;</CheckedIcon>
                    }
                </div>  
            </Info>
        );
    }
}

export default TodoInfo;