import React, {FC} from 'react'
import {Column, ColumnWrapper, Overlay, Spinner} from './styles'

interface LoaderOverlayTypes {
  
}

const LoaderOverlay: FC<LoaderOverlayTypes> = () => {
  return (
      <Overlay>
        <ColumnWrapper>
          <Column/>
          <Column/>
          <Column/>
        </ColumnWrapper>
      </Overlay>
  )
}

export default React.memo(LoaderOverlay)