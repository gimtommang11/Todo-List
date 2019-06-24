import styled from "styled-components";

export const Todo = styled.div`
  display : flex;
  flex-direction : column;
  width : 1219px;
  
  border : 1px solid pink;
`

export const Title = styled.div`
  text-align : center;
  width : 1219px;
  height : 97px;
  background-color : #FFD9D1;
  color : white;
  font-size : 65px;
  text-align : center;
`

export const Input = styled.div`
  display : flex;
  align-items : center;
  width : 1219px;
  height : 103px;
`

export const InputField = styled.input`
  margin-left :32px ;
  font-size :28px;
  width : 1018px;
  height : 65px;
`

export const InputBtn = styled.button`
  width : 130px;
  height  65px; 
  background-color : #FFD9D1;
  border : none;
`

export const List = styled.div`

`
export const Check = styled.input`
`
export const Info = styled.div`
  display : flex;
  align-items : center; 
  height :68px;
  border : 1px solid pink;
  background-color : ${props => props.isChecked ?
    "#E4E4E4":
    "#FFFf"
 }  
  &:hover{
    background-color : #E4E4E4;
  }
`

export const Contnet = styled.div`
   font-size :28px;
   text-decoration: ${props => props.isChecked ?
      "line-through" :
      "none"
}
    color : ${props => props.isChecked ?
      "#707070" :
      "#474747"
}


`

export const DeleteIcon = styled.button`
  align-items  : center;
  margin-left : 21px;
  margin-right : 30px;
  width : 45px;
  height : 45px;
  color : red; 
  font-size : 30px;
  background-color : #ffff;
  border : 1px solid pink;
`
 
export const CheckedIcon = styled.div`
font-size : 30px;
  justify-content : flex-end; 
  color : green;
`
