import React, {FC, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {AppRoute} from '../../routes'
import ScrollUp from '../tools/scroll-up/ScrollUp'
import NotFoundPage from '../pages/not-found-page/NotFoundPage'
import MainPage from '../pages/main-page/MainPage'
import PersonalPage from '../pages/personal-page/PersonalPage'
import PageWrapper from '../layout/page-wrapper/PageWrapper'
import GlobalStyles from './styles'
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {authUserWithStorage} from '../../store/action-creators/user-auth'
import LoaderOverlay from '../ui/loader-overlay/LoaderOverlay'

const App: FC = () => {
  const dispatch = useAppDispatch()
  const authState = useAppSelector(state => state.auth)
  
  useEffect(() => {
    dispatch(authUserWithStorage())
  }, [])
  
  return (
      <>
        {authState.fetching
            ?
            <LoaderOverlay/>
            :
            <>
              <GlobalStyles/>
              <Router>
                <ScrollUp/>
                <Routes>
                  <Route path={AppRoute.MAIN} element={<PageWrapper/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path={AppRoute.PERSONAL} element={<PersonalPage/>}/>
                  </Route>
                  <Route path={AppRoute.NOT_FOUND} element={<PageWrapper/>}>
                    <Route path={AppRoute.NOT_FOUND} element={<NotFoundPage/>}/>
                  </Route>
                </Routes>
              </Router>
            </>
        }
      </>
  )
}

export default React.memo(App)
