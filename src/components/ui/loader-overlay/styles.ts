import styled, {keyframes} from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: ${({theme}) => theme.levels.ultra};
`



const rotate = keyframes`

  from {
    rotate: 0;
  }

  to {
    rotate: 360deg;
  }
`

export const Spinner = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 15px dashed darkslategray;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  transform-origin: 0 0;
  
  animation: ${rotate} 2s ease infinite;
`



export const ColumnWrapper = styled.div`
display: flex;
  gap: 8px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  
`



const resize = keyframes`
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.5);
    background-color: darkslategray;
  }
  100% {
    transform: scaleY(1);
  }
`

export const Column = styled.div`
  width: 14px;
  height: 70px;
  background: #7e534b;
  animation: ${resize} ease-in infinite;
  animation-duration: 1.2s;

  &:nth-of-type(1) {
    animation-delay: -0.9s;
  }

  &:nth-of-type(2) {
    animation-delay: -0.6s;
  }

  &:nth-of-type(3) {
    animation-delay: -0.3s;
  }
`
