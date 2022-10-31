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

const THEME = Object.freeze({
  PRIMARY: "primary",
  SECONDARY: "secondary",
});

const Header = (props) => {
  const {
    navigationItems,
    isBurgerMenu,
    setIsBurgerMenu,
    isDesktop,
    handleMenuClick,
    theme,
  } = props;

  const handleCloseClick = () => {
    if (isBurgerMenu) {
      setIsBurgerMenu(false);
    }
  };

  return (
    <header className={classNames("header", isBurgerMenu && "header--dark")}>
      <Container className="header__container">
        <div
          className={classNames(
            "header__box",
            (isDesktop || !isBurgerMenu) &&
              theme === THEME.SECONDARY &&
              "header__box--secondary"
          )}
        >
          <BurgerMenu
            className={classNames(
              "header__burger-menu",
              isBurgerMenu && "header__burger-menu--white"
            )}
            onClick={handleMenuClick}
          />
          <Logo
            className={classNames(
              "header__logo",
              (isDesktop || !isBurgerMenu) &&
                theme === THEME.SECONDARY &&
                "header__logo--secondary"
            )}
          />
          {!isDesktop && <ButtonList isDesktop={isDesktop} />}
        </div>

        {(isBurgerMenu || isDesktop) && (
          <Navigation
            onClick={handleCloseClick}
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
  theme: PropTypes.oneOf([THEME.PRIMARY, THEME.SECONDARY]),
};

export default Header;
