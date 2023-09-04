import styled from "styled-components";
import {container} from "../../styled";


export const HeaderElement = styled.header`
  min-height: 100px;
  background-color: ${props => props.theme.colors.mainPrimary};
  box-shadow: 5px 5px 5px #cccccc;
`

export const Container = styled.div`
  ${container};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
