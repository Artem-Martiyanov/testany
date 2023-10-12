import styled from 'styled-components'
import {FC} from 'react'


interface ImageProps extends Partial<HTMLImageElement> {
  $offset?: {
    x?: number,
    y?: number
  },
  $scale?: number,
}
export const StyledImage: FC<ImageProps> = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-position: center;
  object-fit: contain;
  transform: translate(${({$offset}) => $offset?.x ? $offset?.x : 0}%, ${({$offset}) => $offset?.y ? $offset?.y : 0}%) scale(${({$scale}) => $scale ? $scale : 1});
`