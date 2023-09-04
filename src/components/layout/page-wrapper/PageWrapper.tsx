import * as React from 'react';
import {Main} from "./styles";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {Outlet} from "react-router-dom";

const PageWrapper = () => {
  return (
    <>
      <Header/>
      <Main>
        <Outlet/>
      </Main>
      <Footer/>
    </>
  );
};

export default PageWrapper;
