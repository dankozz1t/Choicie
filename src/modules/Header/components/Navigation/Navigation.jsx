import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navigation = ({ navigationItems, onClick, styles }) => {
  return (
    <nav className={styles.navigation} onClick={onClick}>
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

Navigation.propTypes = {
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
  styles: PropTypes.shape(PropTypes.string.isRequired).isRequired,
};

export default Navigation;
