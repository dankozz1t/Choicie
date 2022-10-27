import React from "react";

import Button from "shared/components/Button";
import Container from "shared/components/Container";

import FeaturesList from "./FeaturesList";

import heroImage from "assets/images/HomeHeroSection/hero-desktop@1x.png";

import "./HomeHeroSection.scss";

const HomeHeroSection = () => {
  return (
    <section className="home-hero">
      <Container className="home-hero__container">
        <div className="home-hero__wrapper">
          <div className="home-hero__info-box">
            <h1 className="home-hero__title">
              All the restaurants in the world - with&nbsp;one tap
            </h1>
            <p className="home-hero__description">
              And a good friend with the same name. He understands that feeling
              of being an alien in another country, so here is Choicie, an app.
              It can make&nbsp;your journey, date or meeting with friends much
              better.
            </p>
            <Button secondary medium textDark>
              Get Started
            </Button>
          </div>
          <img
            src={heroImage}
            alt="A person makes an order through the phone from a restaurant"
          />
        </div>
        <FeaturesList />
      </Container>
    </section>
  );
};

export default HomeHeroSection;