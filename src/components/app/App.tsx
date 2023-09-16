import React, {FC} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AppRoute} from '../../routes'
import ScrollUp from '../tools/scroll-up/ScrollUp'
import NotFoundPage from '../pages/not-found-page/NotFoundPage'
import MainPage from '../pages/main-page/MainPage'
import PersonalPage from '../pages/personal-page/PersonalPage'
import PageWrapper from '../layout/page-wrapper/PageWrapper'
import GlobalStyles from './styles'


const App: FC = () => {
  // const {products} = useAppSelector(state => state.products)
  return (
      <>
        <GlobalStyles/>
        <Router>
          <ScrollUp/>
          <Routes>
            <Route path={AppRoute.MAIN} element={<PageWrapper/>}>
              <Route index element={<MainPage/>}/>
              <Route path={AppRoute.PERSONAL} element={<PersonalPage/>}/>
              <Route path={AppRoute.NOT_FOUND} element={<NotFoundPage/>}/>
            </Route>
          </Routes>
        </Router>
      </>
  );
};

export default React.memo(App);
