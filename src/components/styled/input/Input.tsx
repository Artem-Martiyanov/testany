import styled from "styled-components";


const StyledInput = styled.input`
  margin: 0;
  padding: 7px 10px;
  border: 1px solid ${props => props.theme.colors.buttonPrimary};
  outline: none;
  background-color: #ffffff;
  font-family: inherit;
  border-radius: 5px;
  color: ${props => props.theme.colors.buttonPrimary};
`


export default StyledInput
