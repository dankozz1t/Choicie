import React from "react";
import classNames from "classnames/bind";

import "./Button.scss";

const Button = (props) => {
  const {
    primary,
    secondary,
    medium,
    small,
    circle,
    onClick,
    className,
    children,
    ...otherProps
  } = props;

  const classes = classNames(
    {
      button: true,
      "button--primary": primary,
      "button--secondary": secondary,
      "button--medium": medium,
      "button--small": small,
      "button--circle": circle,
    },
    className
  );

  return (
    <button type="button" onClick={onClick} className={classes} {...otherProps}>
      {children}
    </button>
  );
};

//!TODO: write PropTypes for props

export default Button;
