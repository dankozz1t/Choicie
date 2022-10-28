import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Container.scss";

const Container = ({ children, className }) => {
  return <div className={classNames("container", className)}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
