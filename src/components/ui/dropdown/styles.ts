import styled from "styled-components";


export const StyledSelect = styled.select`
  border: 1px solid ${props => props.theme.colors.buttonPrimary};
  border-radius: 5px;
  background-color: #ffffff;
  padding: 5px 20px;
  color: ${props => props.theme.colors.buttonPrimary};

  & option:disabled {
    color: ${props => props.theme.colors.buttonPrimary + '55'};
  }
`
