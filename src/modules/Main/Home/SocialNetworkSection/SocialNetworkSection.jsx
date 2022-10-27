import React from "react";

import socialNetworkImage from "assets/images/SocialNetworkSection/socialNetwork-desktop@1x.png";

import "./SocialNetworkSection.scss";
import Button from "shared/components/Button";
import Container from "shared/components/Container";

const SocialNetworkSection = () => {
  return (
    <section className="social-network">
      <Container className="social-network__container">
        <div className="social-network__wrapper">
          <h2 className="social-network__title">And a new social network</h2>

          <p className="social-network__description">
            <span className="social-network__description--margin">
              For those who love food! Become an Influencer: add new restaurants
              to the city map, earn points, get followers.
            </span>
            Keep private important ordering information in your account: mark
            the dishes you liked and didn't like, and the foods you're allergic
            to.
          </p>
          <Button primary medium>
            Get Started
          </Button>
        </div>

        <img
          src={socialNetworkImage}
          alt="Person made food delivery and eats on the balcony"
        />
      </Container>
    </section>
  );
};

export default SocialNetworkSection;
