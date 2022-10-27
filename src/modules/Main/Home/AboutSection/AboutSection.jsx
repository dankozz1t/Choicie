import React from "react";

import "./AboutSection.scss";

import aboutImage from "assets/images/AboutSection/about-desktop@1x.png";
import Container from "shared/components/Container";

const AboutSection = () => {
  return (
    <div className="about" id="about">
      <Container className="about__container">
        <h2 className="about__title">Learn more about Choicie in 1 minute</h2>
        <img
          src={aboutImage}
          alt="Person made food delivery and eats on the balcony"
        />
      </Container>
    </div>
  );
};

export default AboutSection;
