import * as React from 'react';
import {Link} from "react-router-dom";
import {AppRoute} from "../../../routes";
import styled from "styled-components";
import {container} from "../../styled";

const Wrapper = styled.div`
  ${container};
  display: flex;
  justify-content: center;
  padding-top: 30px;
`

const NotFoundPage = () => {
  return (
    <Wrapper>
      <h1>Станица не найдена :(
        <br/>
          попробуйте ещё раз: <Link to={AppRoute.MAIN}>Главная</Link>
      </h1>
    </Wrapper>
  );
};

export default NotFoundPage;
