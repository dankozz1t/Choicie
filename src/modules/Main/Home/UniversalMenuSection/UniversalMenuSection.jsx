import React from "react";
import Button from "shared/components/Button";

import learnMoreImage from "assets/images/UniversalMenuSection/universalMenu-desktop@1x.png";

import "./UniversalMenuSection.scss";
import Container from "shared/components/Container";

const UniversalMenuSection = () => {
  return (
    <section className="universal-menu">
      <Container className="universal-menu__container">
        <div className="universal-menu__wrapper">
          <h2 className="universal-menu__title">
            Choicie is a universal menu for all restaurants.
          </h2>
          <p className="universal-menu__description">
            <span className="universal-menu__description--margin">
              Foreign language names are no longer a problem.
            </span>
            Try new dishes when you travel or just go outside — with Choicie,
            you can order anything using automatic menu translation pictures of
            dishes. Place your order on the way to the restaurant, then just
            show the QR-code to the waiter.
          </p>
          <Button primary medium>
            Get Started
          </Button>
        </div>

        <img
          src={learnMoreImage}
          alt="Person made food delivery and eats on the balcony"
        />
      </Container>
    </section>
  );
};

export default UniversalMenuSection;
