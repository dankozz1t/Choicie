import classNames from "classnames";
import React from "react";

import "./SectionTitle.scss";

const SectionTitle = ({ children, className, tag = "h2" }) => {
  const CustomTag = tag;
  return (
    <CustomTag className={classNames(className, "section-title")}>
      {children}
    </CustomTag>
  );
};

export default SectionTitle;
