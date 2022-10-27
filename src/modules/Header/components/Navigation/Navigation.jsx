import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation = ({ navigationItems }) => {
  return (
    <nav className="navigation">
      {navigationItems.map(({ id, to, text, tag }) => {
        if (tag === "a") {
          return (
            <a className="navigation__link" key={id} href={`#${id}`}>
              {text}
            </a>
          );
        }

        return (
          <NavLink className="navigation__link" key={id} end to={to}>
            {text}
          </NavLink>
        );
      })}
    </nav>
  );
};

//TODO: PropTypes

export default Navigation;
