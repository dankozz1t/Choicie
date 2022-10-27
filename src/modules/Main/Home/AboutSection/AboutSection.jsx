import React from "react";

import "./AboutSection.scss";

import aboutImage from "assets/images/AboutSection/about-desktop@1x.png";
import Container from "shared/components/Container";

const AboutSection = () => {
  return (
    <div className="about" id="about">
      <Container className="about__container">
        <h2 className="about__title">Learn more about Choicie in 1 minute</h2>

        <video width="1170" height="650" poster={aboutImage} controls>
          <source src="#" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Container>
    </div>
  );
};

export default AboutSection;
