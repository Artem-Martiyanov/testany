import styled from "styled-components";


type Props = {
  $size: string,
  $bottomIndent?: string
}
export const Title = styled.h1`
  font-size: ${(props: Props) => props?.$size};
  margin: 0;
  margin-bottom: ${props => props.$bottomIndent};
`
