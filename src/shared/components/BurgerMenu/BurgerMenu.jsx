import React from "react";
import PropTypes from "prop-types";

import "./BurgerMenu.scss";

import { ReactComponent as Menu } from "assets/icons/BurgerMenu/01_burger-menu.svg";
import classNames from "classnames";

const BurgerMenu = ({ className, ...props }) => {
  return (
    <button
      aria-label="burger menu for show navigation"
      className={classNames("burger-menu", className)}
      type="button"
      {...props}
    >
      <Menu />
    </button>
  );
};

BurgerMenu.propTypes = {
  className: PropTypes.string,
};

export default React.memo(BurgerMenu);
