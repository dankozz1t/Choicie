import React from "react";
import PropTypes from "prop-types";
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

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  circle: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default React.memo(Button);
