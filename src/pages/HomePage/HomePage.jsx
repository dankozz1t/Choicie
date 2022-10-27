import React from "react";

import Header from "modules/Header";
import homeNavigationItems from "./homeNavigationItems.json";

import HomeHeroSection from "modules/Main/Home/HomeHeroSection";
import AboutSection from "modules/Main/Home/AboutSection";
import UniversalMenuSection from "modules/Main/Home/UniversalMenuSection";
import SocialNetworkSection from "modules/Main/Home/SocialNetworkSection";
import HowToUseSection from "modules/Main/Home/HowToUseSection";
import AllTheWorldSection from "modules/Main/Home/AllTheWorldSection";
import SubscribeSection from "modules/Main/Home/SubscribeSection";
import Footer from "modules/Footer";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-background">
      <Header navigationItems={homeNavigationItems} />
      <main>
        <HomeHeroSection />
        <AboutSection />
        <UniversalMenuSection />
        <SocialNetworkSection />
        <HowToUseSection />
        <AllTheWorldSection />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
