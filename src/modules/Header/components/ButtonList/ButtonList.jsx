import React from "react";
import Button from "shared/components/Button";

import { ReactComponent as LogoAndroidIcon } from "assets/icons/Button/android.svg";
import { ReactComponent as LogoIOSIcon } from "assets/icons/Button/ios.svg";

import "./ButtonList.scss";

const ButtonList = () => {
  return (
    <ul className="button-list">
      <li>
        <Button primary medium>
          <LogoAndroidIcon />
          Android
        </Button>
      </li>
      <li>
        <Button secondary medium textDark>
          <LogoIOSIcon />
          iOS
        </Button>
      </li>
    </ul>
  );
};

export default ButtonList;
