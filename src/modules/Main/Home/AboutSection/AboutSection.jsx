import React from "react";

import aboutImage from "assets/images/AboutSection/about-desktop@1x.png";

import Container from "shared/components/Container";
import SectionTitle from "shared/components/SectionTitle";

import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <div className="about" id="about">
      <Container className="about__container">
        <SectionTitle className="about__title">
          Learn more about Choicie in 1 minute
        </SectionTitle>

        <video width="100%" height="650" poster={aboutImage} controls>
          <source src="#" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Container>
    </div>
  );
};

export default AboutSection;
