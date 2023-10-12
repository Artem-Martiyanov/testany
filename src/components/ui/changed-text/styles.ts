import styled, {css} from 'styled-components'
import {FC, ReactChildren, ReactElement} from 'react'

export const Wrapper = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`

export const EditButton = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background: none;
  cursor: pointer;
  color: ${props => props.theme.colors.mainPrimary};
`

export const Label = styled.label`
  display: flex;

  button {
    font-size: 18px;
  }
`

interface TextProps {
  $font?: {
    size?: string,
    weight?: string,
  },
  children: any
}

export const Text: FC<TextProps> = styled.p`
  margin: 0;
  
  ${({$font}) => $font && css`
    font-size: ${$font.size};
    font-weight: ${$font.weight};
  `}
`