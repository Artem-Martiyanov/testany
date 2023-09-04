import styled from "styled-components";


export const FormWrapper = styled.form`
display: flex;
  flex-direction: column;
  gap: ${props => props.theme.indent};

`

export const Control = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
`
