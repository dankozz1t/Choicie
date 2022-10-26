import React from "react";
import Header from "modules/Header";
import HomeHeroSection from "./HomeHeroSection";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="background">
      <Header />
      <main>
        <HomeHeroSection />
      </main>
    </div>
  );
};

export default HomePage;
