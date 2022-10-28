import React from "react";

import BurgerMenu from "shared/components/BurgerMenu";

import Container from "shared/components/Container";
import Logo from "shared/components/Logo";
import ButtonList from "./components/ButtonList";
import Navigation from "./components/Navigation";

import "./Header.scss";

const Header = (props) => {
  const { navigationItems, isBurgerMenu, isDesktop, handleMenuClick } = props;

  return (
    <header className="header">
      <Container className="header__container">
        <div className="header__box">
          <BurgerMenu
            className="header__burger-menu"
            onClick={handleMenuClick}
          />
          <Logo className="header__logo" />
          {!isDesktop && <ButtonList />}
        </div>

        {isBurgerMenu && <Navigation navigationItems={navigationItems} />}
        {isDesktop && <ButtonList />}
      </Container>
    </header>
  );
};

export default Header;
