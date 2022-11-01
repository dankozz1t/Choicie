import classNames from "classnames";
import React from "react";

import "./SectionTitle.scss";

const SectionTitle = ({ children, className, tag = "h2" }) => {
  const CustomTag = tag;
  return (
    <CustomTag className={classNames("section-title", className)}>
      {children}
    </CustomTag>
  );
};

export default SectionTitle;
