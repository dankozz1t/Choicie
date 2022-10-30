import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useMediaQuery } from "react-responsive";

import demoNavigationItems from "./demoNavigationItems.json";

import Header from "modules/Header";
import Footer from "modules/Footer";
import DemoSection from "modules/Main/Demo/DemoSection";

import "./DemoApiPage.scss";

const DemoApiPage = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  !isDesktop && isBurgerMenu
    ? disableBodyScroll(document)
    : enableBodyScroll(document);

  const handleMenuClick = () => {
    setIsBurgerMenu(!isBurgerMenu);
  };

  return (
    <div className="demo-background-color">
      <Header
        isBurgerMenu={isBurgerMenu}
        isDesktop={isDesktop}
        handleMenuClick={handleMenuClick}
        navigationItems={demoNavigationItems}
      />
      <main>
        <DemoSection />
      </main>
      <Footer navigationItems={demoNavigationItems} />
    </div>
  );
};

export default DemoApiPage;
