import React, {FC} from 'react'
import {Overlay} from './styles'
import Loader from '../loader/Loader'

const LoaderOverlay: FC = () => {
  return (
      <Overlay>
        <Loader/>
      </Overlay>
  )
}

export default React.memo(LoaderOverlay)