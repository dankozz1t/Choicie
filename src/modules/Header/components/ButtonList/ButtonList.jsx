import React from "react";
import Button from "shared/components/Button";

import { ReactComponent as LogoAndroid } from "assets/icons/android.svg";
import { ReactComponent as LogoIOS } from "assets/icons/ios.svg";

import "./ButtonList.scss";

const ButtonList = () => {
  return (
    <ul className="button-list">
      <li>
        <Button primary medium>
          <LogoAndroid />
          Android
        </Button>
      </li>
      <li>
        <Button secondary medium textDark>
          <LogoIOS />
          iOS
        </Button>
      </li>
    </ul>
  );
};

export default ButtonList;
