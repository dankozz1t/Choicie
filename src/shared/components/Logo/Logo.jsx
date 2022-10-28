import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { ReactComponent as LogoIcon } from "assets/icons/Logo/logo.svg";
import { ReactComponent as LogoTitle } from "assets/icons/Logo/logoTitle.svg";

import "./Logo.scss";

const Logo = ({ className }) => {
  return (
    <Link to="/" className={classNames("logo", className)}>
      <LogoIcon />
      <LogoTitle />
    </Link>
  );
};

export default Logo;
