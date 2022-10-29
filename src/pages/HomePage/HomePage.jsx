import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

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

const HomePage = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [isBurgerMenu, setIsBurgerMenu] = useState(isDesktop);

  const handleMenuClick = () => {
    setIsBurgerMenu(!isBurgerMenu);
  };

  return (
    <div
      className={classNames(
        (isBurgerMenu || isDesktop) && "home-background-color",
        isDesktop && "home-background-color--height"
      )}
    >
      <Header
        isBurgerMenu={isBurgerMenu}
        isDesktop={isDesktop}
        handleMenuClick={handleMenuClick}
        navigationItems={homeNavigationItems}
      />
      <main>
        <HomeHeroSection />
        {isDesktop && <AboutSection />}
        <UniversalMenuSection />
        <SocialNetworkSection />
        <HowToUseSection />
        <AllTheWorldSection />
        <SubscribeSection />
      </main>
      <Footer navigationItems={homeNavigationItems} />
    </div>
  );
};

export default HomePage;
