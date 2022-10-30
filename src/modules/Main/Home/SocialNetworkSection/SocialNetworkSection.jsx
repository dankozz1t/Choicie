import React from "react";
import PropTypes from "prop-types";

import Container from "shared/components/Container";
import Button from "shared/components/Button";

import socialNetworkImage from "assets/images/SocialNetworkSection/socialNetwork-desktop@1x.png";
import { ReactComponent as SocialNetworkMobileIcon } from "assets/icons/SocialNetworkSection/01_social-network.svg";

import "./SocialNetworkSection.scss";

const SocialNetworkSection = ({ isDesktop }) => {
  return (
    <section className="social-network">
      <Container className="social-network__container">
        {isDesktop ? (
          <img
            src={socialNetworkImage}
            alt="Person made food delivery and eats on the balcony"
          />
        ) : (
          <SocialNetworkMobileIcon className="social-network__mobile-icon" />
        )}

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
          <Button primary medium className="social-network__button">
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  );
};

SocialNetworkSection.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default SocialNetworkSection;
