import * as React from 'react';
import {Main} from "./styles";
import {Outlet} from "react-router-dom";

const PageWrapper: React.FC = () => {
  return (
    <>
      {/*<Header/>*/}
      <Main>
        <Outlet/>
      </Main>
      {/*<Footer/>*/}
    </>
  );
};

export default PageWrapper;
