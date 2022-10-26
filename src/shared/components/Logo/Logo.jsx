import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as LogoIcon } from "assets/icons/Logo/logo.svg";
import { ReactComponent as LogoTitle } from "assets/icons/Logo/logoTitle.svg";

import "./Logo.scss";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <LogoIcon />
      <LogoTitle />
    </Link>
  );
};

export default Logo;
