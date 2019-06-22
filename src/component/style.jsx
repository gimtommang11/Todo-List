import styled from "styled-components";

export const Title = styled.div`

`

export const Input = styled.div`

`

export const List = styled.div`

`
export const Check = styled.input`
`
export const Info = styled.div`
  margin-bottom : 10px;
  display : flex;
  background-color : ${props => this.props.isChecked ?
    "#E4E4E4":
    "#FFFf"
  }
  
  &:hover{
    background-color : #E4E4E4;
  }
`
export const DeleteIcon = styled.button`
  color : red; 
`
 
export const CheckedIcon = styled.div`
  color : green;
`
