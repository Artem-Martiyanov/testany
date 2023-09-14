import styled from 'styled-components';

export type TitleSizeType = '20px' | '24px' | '28px'

interface TitleProps {
  size: TitleSizeType,
}

export const Title = styled.h1<TitleProps>`
  color: ${({theme}) => theme.colors.buttonPrimary};
  font-size: ${({size}) => size};
`
