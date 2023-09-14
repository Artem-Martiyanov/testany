import styled from 'styled-components';


export enum Size {
  SMALL = '18px',
  MEDIUM = '24px',
  LARGE = '28px'
}

interface TitleProps {
  size: Size,
}

export const Title = styled.h1<TitleProps>`
  color: ${({theme}) => theme.colors.textSecondary};
  font-size: ${({size}) => size};
  margin: 0;
  
  margin-bottom: ${({$indent}) => $indent}px;
`
