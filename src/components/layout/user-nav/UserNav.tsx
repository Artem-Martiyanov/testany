import * as React from 'react';
import {User, Wrapper} from "./styles";
import Button from "../../ui/button/Button";

type Props = {
  username: string,
  isAuthorized: boolean,
  onClick: () => void
}

const UserNav = ({username, isAuthorized, onClick}: Props) => {
  return (
    <Wrapper>
      {isAuthorized && <User>{username}</User>}
      <Button type="button" onClick={onClick}>
        {isAuthorized ? 'Выйти' : 'Войти'}
      </Button>
    </Wrapper>
  );
};

export default UserNav;
