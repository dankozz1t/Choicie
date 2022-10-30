import React from "react";

import socialItems from "./socialItems.json";

import "./SocialList.scss";

const SocialList = () => {
  return (
    <ul className="social-list">
      {socialItems.map(({ id, text, href }) => (
        <li key={id} className="social-list__item">
          <a className="social-list__link" target="noopener" href={href}>
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
