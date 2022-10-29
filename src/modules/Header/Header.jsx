import React from "react";
import classNames from "classnames";

import BurgerMenu from "shared/components/BurgerMenu";

import Container from "shared/components/Container";
import Logo from "shared/components/Logo";
import ButtonList from "./components/ButtonList";
import Navigation from "./components/Navigation";

import navigationStyles from "./NavigationHeader.module.scss";
import "./Header.scss";

const Header = (props) => {
  const { navigationItems, isBurgerMenu, isDesktop, handleMenuClick } = props;

  return (
    <header className={classNames("header", isBurgerMenu && "header--dark")}>
      <Container className="header__container">
        <div className="header__box">
          <BurgerMenu
            className={classNames(
              "header__burger-menu",
              isBurgerMenu && "header__burger-menu--white"
            )}
            onClick={handleMenuClick}
          />
          <Logo className="header__logo" />
          {!isDesktop && <ButtonList />}
        </div>

        {(isBurgerMenu || isDesktop) && (
          <Navigation
            navigationItems={navigationItems}
            styles={navigationStyles}
          />
        )}
        {isDesktop && <ButtonList />}
      </Container>
    </header>
  );
};

export default Header;
