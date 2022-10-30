import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { ReactComponent as LogoIcon } from "assets/icons/Logo/01_logo.svg";
import { ReactComponent as LogoTitle } from "assets/icons/Logo/02_logo-title.svg";

import "./Logo.scss";

const Logo = ({ className }) => {
  return (
    <Link to="/" className={classNames("logo", className)}>
      <LogoIcon />
      <LogoTitle />
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
