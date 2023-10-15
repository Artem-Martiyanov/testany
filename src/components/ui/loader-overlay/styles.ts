import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: ${({theme}) => theme.levels.ultra};
`