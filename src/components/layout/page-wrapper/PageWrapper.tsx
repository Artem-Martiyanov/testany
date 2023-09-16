import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
import {Main} from './styles'
import Header from '../header/Header'


const PageWrapper: FC = () => {
  return (
      <>
        <Header/>
        <Main>
          <Outlet/>
        </Main>
        {/*<Footer/>*/}
      </>
  )
}

export default React.memo(PageWrapper)