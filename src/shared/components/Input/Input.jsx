import React from "react";
import classNames from "classnames";

import "./Input.scss";

const Input = ({ className, ...props }) => {
  return <input className={classNames("input", className)} {...props} />;
};

export default Input;
