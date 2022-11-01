import React from "react";
import classNames from "classnames";

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
