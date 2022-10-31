import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import PropTypes from "prop-types";

import demoNavigationItems from "./demoNavigationItems.json";

import Header from "modules/Header";
import Footer from "modules/Footer";
import DemoSection from "modules/Main/Demo/DemoSection";

import "./DemoApiPage.scss";

const DemoApiPage = ({ isDesktop }) => {
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
        theme="secondary"
        isBurgerMenu={isBurgerMenu}
        isDesktop={isDesktop}
        handleMenuClick={handleMenuClick}
        navigationItems={demoNavigationItems}
      />
      <main>
        <DemoSection />
      </main>
      <Footer navigationItems={demoNavigationItems} isDesktop={isDesktop} />
    </div>
  );
};

DemoApiPage.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default DemoApiPage;
