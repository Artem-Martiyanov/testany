import React, {FC, useState} from 'react'
import {ImageWrapper, StyledImage} from './styles'
import Loader from '../loader/Loader'

interface ImageTypes extends Partial<HTMLImageElement> {
  offset?: {
    x?: number,
    y?: number
  },
  scale?: number
}

const Image: FC<ImageTypes> = ({offset, scale, ...props}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
      <ImageWrapper>
        <StyledImage
            onLoad={() => setIsLoaded(true)}
            $offset={offset}
            $scale={scale}
            $isLoaded={isLoaded}
            {...props}
        />
        {!isLoaded && <Loader/>}
        
      </ImageWrapper>
  )
}

export default React.memo(Image)