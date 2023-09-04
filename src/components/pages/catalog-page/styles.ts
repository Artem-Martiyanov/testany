import styled from "styled-components";
import {container, Ul} from "../../styled";

export const Container = styled.section`
  ${container}
`

export const ProductList = styled(Ul)`
  display: grid;
  grid-template-columns: ${props => props.$isList ? '1fr' : 'repeat(3, 1fr)'};
  gap: ${props => props.theme.indent};
  margin-bottom: 40px;
`


export const Tools = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  gap: ${props => props.theme.indent};
`
