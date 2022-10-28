import React from "react";

import "./BurgerMenu.scss";

import { ReactComponent as Menu } from "assets/icons/BurgerMenu/burger-menu.svg";
import classNames from "classnames";

const BurgerMenu = ({ className, ...props }) => {
  return (
    <button
      className={classNames("burger-menu", className)}
      type="button"
      {...props}
    >
      <Menu />
    </button>
  );
};

export default BurgerMenu;
