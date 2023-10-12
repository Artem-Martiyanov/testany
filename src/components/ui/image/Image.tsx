import React, {FC} from 'react'
import {StyledImage} from './styles'

interface ImageTypes extends Partial<HTMLImageElement> {
  offset?: {
    x?: number,
    y?: number
  },
  scale?: number
}

const Image: FC<ImageTypes> = ({offset, scale, ...props}) => {
  return (
      <StyledImage
          $offset={offset}
          $scale={scale}
          {...props}
      />
  )
}

export default React.memo(Image)