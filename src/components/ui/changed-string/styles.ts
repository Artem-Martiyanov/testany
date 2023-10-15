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

interface TextProps {
  $font?: {
    size?: string,
    weight?: string,
  },
  children: any
}

export const Text = styled.p<TextProps>`
  margin: 0;
  
  ${({$font}) => $font && css`
    font-size: ${$font.size};
    font-weight: ${$font.weight};
  `}
`