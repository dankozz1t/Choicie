import React from "react";
import PropTypes from "prop-types";

import Button from "shared/components/Button";

import { ReactComponent as LogoAndroidIcon } from "assets/icons/Button/01_android.svg";
import { ReactComponent as LogoIOSIcon } from "assets/icons/Button/02_ios.svg";

import "./ButtonList.scss";

const ButtonList = ({ isDesktop }) => {
  return (
    <ul className="button-list">
      <li>
        {isDesktop ? (
          <Button primary medium className="button-list__button">
            <LogoAndroidIcon />
            Android
          </Button>
        ) : (
          <Button primary circle>
            <LogoAndroidIcon />
          </Button>
        )}
      </li>
      <li>
        {isDesktop ? (
          <Button
            secondary
            medium
            className="button-list__button button-list__button--dark"
          >
            <LogoIOSIcon />
            iOS
          </Button>
        ) : (
          <Button secondary circle>
            <LogoIOSIcon />
          </Button>
        )}
      </li>
    </ul>
  );
};

ButtonList.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default ButtonList;
