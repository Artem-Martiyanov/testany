import * as React from 'react';
import {Container, HeaderElement} from "./styles";
import Nav from "../nav/Nav";
import UserNav from "../user-nav/UserNav";

const Header = () => {
  return (
    <HeaderElement>
      <Container>
        <Nav/>
        <UserNav
          isAuthorized={true}
          username={'Артём Мартиянов'}
          onClick={() => {
          }}
        />
      </Container>
    </HeaderElement>
  );
};

export default Header;
