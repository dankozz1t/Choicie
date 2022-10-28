import React from "react";
import classNames from "classnames";

import "./Comment.scss";

const Comment = ({ title, Icon, name, coFounder, className }) => {
  return (
    <div className={classNames("comment", className)}>
      <p className="comment__title">{title}</p>
      <div className="comment__block">
        <Icon className="comment__icon" />

        <p className="comment__author-block">
          <span className="comment__name">{name}</span>
          <span className="comment__co-founder">{coFounder}</span>
        </p>
      </div>
    </div>
  );
};

export default Comment;
