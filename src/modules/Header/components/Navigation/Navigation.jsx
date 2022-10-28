import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ navigationItems, styles }) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        {navigationItems.map(({ id, to, text, tag }) => {
          if (tag === "a") {
            return (
              <li className={styles.navigation__item} key={id}>
                <a className={styles.navigation__link} href={`#${id}`}>
                  {text}
                </a>
              </li>
            );
          }

          return (
            <li className={styles.navigation__item} key={id}>
              <NavLink className={styles.navigation__link} end to={to}>
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
