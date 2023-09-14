import * as React from 'react';
import {Link} from "react-router-dom";
import {AppRoute} from "../../../routes";

const NotFoundPage:React.FC = () => {
  return (
    <>
      <h1>Станица не найдена :(
        <br/>
          попробуйте ещё раз: <Link to={AppRoute.MAIN}>Главная</Link>
      </h1>
    </>
  );
};

export default NotFoundPage;
