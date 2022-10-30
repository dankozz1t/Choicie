import React from "react";
import { useMediaQuery } from "react-responsive";

import Button from "shared/components/Button";

import { ReactComponent as LogoAndroidIcon } from "assets/icons/Button/android.svg";
import { ReactComponent as LogoIOSIcon } from "assets/icons/Button/ios.svg";

import "./ButtonList.scss";

const ButtonList = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

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

export default ButtonList;
