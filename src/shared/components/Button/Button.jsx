import React from "react";
import classNames from "classnames/bind";

import "./Button.scss";

const Button = (props) => {
  const {
    children,
    primary,
    secondary,
    small,
    medium,
    textDark,
    onClick,
    ...otherProps
  } = props;

  const classes = classNames({
    button: true,
    "button--small": small,
    "button--medium": medium,
    "button--primary": primary,
    "button--secondary": secondary,
    "button--text-blue": textDark,
  });

  return (
    <button onClick={onClick} className={classes} {...otherProps}>
      {children}
    </button>
  );
};

//!TODO: write PropTypes for props

export default Button;
