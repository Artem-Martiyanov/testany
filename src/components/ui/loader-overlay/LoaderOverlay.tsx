import React, {FC} from 'react'
import {Column, ColumnWrapper, Overlay} from './styles'

const LoaderOverlay: FC = () => {
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