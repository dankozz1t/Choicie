import React from "react";
import Header from "modules/Header";

import HomeHeroSection from "modules/Main/Home/HomeHeroSection";
import AboutSection from "modules/Main/Home/AboutSection";
import UniversalMenuSection from "modules/Main/Home/UniversalMenuSection";
import SocialNetworkSection from "modules/Main/Home/SocialNetworkSection";

import "./HomePage.scss";

import homeNavigationItems from "./homeNavigationItems.json";
import HowToUseSection from "modules/Main/Home/HowToUseSection";

const HomePage = () => {
  return (
    <div className="background">
      <Header navigationItems={homeNavigationItems} />
      <main>
        <HomeHeroSection />
        <AboutSection />
        <UniversalMenuSection />
        <SocialNetworkSection />
        <HowToUseSection />
      </main>
    </div>
  );
};

export default HomePage;
