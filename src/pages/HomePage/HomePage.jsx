import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import PropTypes from "prop-types";

import Header from "modules/Header";
import homeNavigationItems from "./homeNavigationItems.json";

import HomeHeroSection from "modules/Main/Home/HomeHeroSection";
import AboutSection from "modules/Main/Home/AboutSection";
import UniversalMenuSection from "modules/Main/Home/UniversalMenuSection";
import SocialNetworkSection from "modules/Main/Home/SocialNetworkSection";
import HowToUseSection from "modules/Main/Home/HowToUseSection";
import AllTheWorldSection from "modules/Main/Home/AllTheWorldSection";
import SubscribeSection from "modules/Main/SubscribeSection";
import Footer from "modules/Footer";

import "./HomePage.scss";

const HomePage = ({ isDesktop }) => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  !isDesktop && isBurgerMenu
    ? disableBodyScroll(document)
    : enableBodyScroll(document);

  const handleMenuClick = () => {
    setIsBurgerMenu(!isBurgerMenu);
  };

  return (
    <div className="home-background-color">
      <Header
        theme={!isDesktop ? "secondary" : "primary"}
        isBurgerMenu={isBurgerMenu}
        isDesktop={isDesktop}
        handleMenuClick={handleMenuClick}
        navigationItems={homeNavigationItems}
      />
      <main>
        <HomeHeroSection isDesktop={isDesktop} />
        {isDesktop && <AboutSection />}
        <UniversalMenuSection isDesktop={isDesktop} />
        <SocialNetworkSection isDesktop={isDesktop} />
        <HowToUseSection isDesktop={isDesktop} />
        <AllTheWorldSection isDesktop={isDesktop} />
        <SubscribeSection />
      </main>
      <Footer navigationItems={homeNavigationItems} isDesktop={isDesktop} />
    </div>
  );
};

HomePage.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default HomePage;
