import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Input.scss";

const Input = ({ className, ...props }) => {
  return <input className={classNames("input", className)} {...props} />;
};

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
