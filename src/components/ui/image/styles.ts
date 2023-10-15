import styled, {css, keyframes} from 'styled-components'


interface ImageProps extends Partial<HTMLImageElement> {
  $offset?: {
    x?: number,
    y?: number
  },
  $scale?: number,
  $isLoaded: boolean
}

export const StyledImage = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  display: block;
  object-position: center;
  object-fit: contain;
  transform: translate(${({$offset}) => $offset?.x ? $offset?.x : 0}%, ${({$offset}) => $offset?.y ? $offset?.y : 0}%) scale(${({$scale}) => $scale ? $scale : 1});
  ${({$isLoaded}) => $isLoaded ? 'opacity: 1;' : 'opacity: 0;'}
`


const resize = keyframes`
  0% {
    transform: translate(-50%, -50%) scaleY(1);
  }
  50% {
    transform: translate(-50%, -50%) scaleY(0.5);
    background-color: darkslategray;
  }
  100% {
    transform: translate(-50%, -50%) scaleY(1);
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`


