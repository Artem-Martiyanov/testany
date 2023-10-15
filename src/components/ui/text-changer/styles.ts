import styled from 'styled-components'

export const ChangerForm = styled.form`
`


export const Label = styled.label`
  display: flex;
  position: relative;
  
  input {
    font: inherit;
    font-size: 20px;
  }
`

export const Buttons = styled.div`
  display: flex;
  font-size: 18px;
  position: absolute;
  right: 0;
  bottom: calc(100% - 12px);
  
  button {
    width: 15px;
    height: 15px;
    padding: 0;
  }

`