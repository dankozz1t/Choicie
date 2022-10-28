import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation = ({ navigationItems }) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigationItems.map(({ id, to, text, tag }) => {
          if (tag === "a") {
            return (
              <li className="navigation__item" key={id}>
                <a className="navigation__link" href={`#${id}`}>
                  {text}
                </a>
              </li>
            );
          }

          return (
            <li className="navigation__item" key={id}>
              <NavLink className="navigation__link" end to={to}>
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

//TODO: PropTypes

export default Navigation;
