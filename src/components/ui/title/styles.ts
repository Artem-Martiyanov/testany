import styled from 'styled-components';


export enum Size {
  SMALL = '18px',
  MEDIUM = '24px',
  LARGE = '28px'
}

interface TitleProps {
  size: Size,
  $indent?: number
}

export const Title = styled.h1<TitleProps>`
  color: ${({theme}) => theme.colors.textSecondary};
  font-size: ${({size}) => size};
  margin: 0 0 ${({$indent}) => $indent}px 0;
`