import * as React from 'react';
import {NavItem, NavLinkComponent, NavList, StyledNav} from "./styles";
import {AppRoute} from "../../../routes";

const Nav = () => {
  return (
    <StyledNav>
      <NavList>
        <NavItem>
          <NavLinkComponent to={AppRoute.MAIN}>Главная</NavLinkComponent>
        </NavItem>
        <NavItem>
          <NavLinkComponent to={AppRoute.CATALOG}>Каталог</NavLinkComponent>
        </NavItem>
      </NavList>
    </StyledNav>
  );
};

export default Nav;
