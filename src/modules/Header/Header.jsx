import React from "react";
import PropTypes from "prop-types";
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
          {!isDesktop && <ButtonList isDesktop={isDesktop} />}
        </div>

        {(isBurgerMenu || isDesktop) && (
          <Navigation
            navigationItems={navigationItems}
            styles={navigationStyles}
          />
        )}
        {isDesktop && <ButtonList isDesktop={isDesktop} />}
      </Container>
    </header>
  );
};

Header.propTypes = {
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
  isBurgerMenu: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default Header;
