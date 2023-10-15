import React, {FC} from 'react'
import {Column, ColumnWrapper} from './styles'

interface LoaderTypes {

}

const Loader: FC<LoaderTypes> = () => {
  return (
      <ColumnWrapper>
        <Column/>
        <Column/>
        <Column/>
      </ColumnWrapper>
  )
}

export default React.memo(Loader)