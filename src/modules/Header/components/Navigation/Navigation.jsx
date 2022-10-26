import React from "react";
import { NavLink } from "react-router-dom";

import navigationItems from "./navigationItems.json";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      {navigationItems.map(({ id, to, text }) => (
        <NavLink className="navigation__link" key={id} end to={to}>
          {text}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
