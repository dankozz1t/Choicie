import React from "react";
import classNames from "classnames";

import "./Comment.scss";

const Comment = ({ title, body, Icon, name, coFounder, className }) => {
  return (
    <div className={classNames("comment", className)}>
      {title && <p className="comment__title">{title}</p>}
      <p className="comment__body">“{body}“</p>
      <div className="comment__block">
        {Icon && <Icon className="comment__icon" />}

        <p className="comment__author-block">
          <span className="comment__name">{name}</span>
          {coFounder && (
            <span className="comment__co-founder">{coFounder}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default React.memo(Comment);
