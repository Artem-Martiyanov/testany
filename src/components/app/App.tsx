import * as React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GlobalStyles from "./styles";
import PageWrapper from "../layout/page-wrapper/PageWrapper";
import {AppRoute} from "../../routes";
import CatalogPage from "../pages/catalog-page/CatalogPage";
import MainPage from "../pages/main-page/MainPage";
import NotFoundPage from "../pages/not-found-page/NotFoundPage";
import ScrollUp from "../tools/scroll-up/ScrollUp";
import {Provider} from "react-redux";
import {store} from "../../store/store";


const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles/>
      <Router>
        <ScrollUp/>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper/>}>
            <Route index element={<MainPage/>}/>
            <Route path={AppRoute.CATALOG} element={<CatalogPage/>}/>
            <Route path={AppRoute["404"]} element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
