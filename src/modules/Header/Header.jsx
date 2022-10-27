import React from "react";
import Container from "shared/components/Container";
import Logo from "shared/components/Logo";
import ButtonList from "./components/ButtonList";
import Navigation from "./components/Navigation";

import "./Header.scss";

const Header = ({ navigationItems }) => {
  return (
    <header className="header">
      <Container className="header__container">
        <div className="header__box">
          <Logo />

          <Navigation navigationItems={navigationItems} />
        </div>
        <ButtonList />
      </Container>
    </header>
  );
};

export default Header;
