import React from "react";
import Logo from "shared/components/Logo";
import ButtonList from "./components/ButtonList";
import Navigation from "./components/Navigation";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__box">
        <Logo />

        <Navigation />
      </div>
      <ButtonList />
    </header>
  );
};

export default Header;
