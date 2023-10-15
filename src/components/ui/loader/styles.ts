import styled, {keyframes} from 'styled-components'

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
    background-color: #0874de;
  }
  100% {
    transform: scaleY(1);
  }
`

export const Column = styled.div`
  width: 14px;
  height: 70px;
  background: rgb(120, 89, 207);
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