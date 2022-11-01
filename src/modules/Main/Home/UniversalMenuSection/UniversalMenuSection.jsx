import React from "react";
import PropTypes from "prop-types";

import Container from "shared/components/Container";
import SectionTitle from "shared/components/SectionTitle";
import Button from "shared/components/Button";

import learnMoreImage from "assets/images/UniversalMenuSection/universalMenu-desktop@1x.png";
import { ReactComponent as UniversalMenuMobileIcon } from "assets/icons/UniversalMenuSection/01_universal-menu.svg";

import "./UniversalMenuSection.scss";

const UniversalMenuSection = ({ isDesktop }) => {
  return (
    <section className="universal-menu">
      <Container className="universal-menu__container">
        {isDesktop ? (
          <img
            src={learnMoreImage}
            alt="Person made food delivery and eats on the balcony"
          />
        ) : (
          <UniversalMenuMobileIcon className="universal-menu__mobile-icon" />
        )}

        <div className="universal-menu__wrapper">
          <SectionTitle className="universal-menu__title">
            Choicie is a universal menu for all restaurants.
          </SectionTitle>

          <p className="universal-menu__description">
            <span className="universal-menu__description--margin">
              Foreign language names are no longer a problem.
            </span>
            Try new dishes when you travel or just go outside — with Choicie,
            you can order anything using automatic menu translation pictures of
            dishes. Place your order on the way to the restaurant, then just
            show the QR-code to the waiter.
          </p>
          <Button primary medium className="universal-menu__button">
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  );
};

UniversalMenuSection.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default UniversalMenuSection;
