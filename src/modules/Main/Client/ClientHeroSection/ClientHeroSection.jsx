import React from "react";
import { useMediaQuery } from "react-responsive";

import Container from "shared/components/Container";
import Comment from "shared/components/Comment";

import heroDesktop1xImage from "assets/images/ClientHeroSection/client-hero-desktop@1x.png";
import heroDesktop2xImage from "assets/images/ClientHeroSection/client-hero-desktop@2x.png";
import heroMobileImage from "assets/images/ClientHeroSection/client-hero-mobile@1x.png";

import { ReactComponent as positiveIcon } from "assets/icons/Comment/01_positive-review.svg";

import "./ClientHeroSection.scss";

const ClientHeroSection = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <section className="client-hero">
      <Container className="client-hero__container">
        <div>
          <h1 className="client-hero__title">
            Choicie: more clients, easier communication
          </h1>
          <p className="client-hero__description">
            Choicie is very familiar with the feeling of being an alien in
            another country (he is actually an alien). So Choicie decided to
            help people with the same problem to get rid of it and also improve
            cafes and restaurants.
          </p>
          <a className="client-hero__link" href="/">
            Watch Choicie in action — 2 min
          </a>
        </div>
        <div>
          <picture>
            <source
              srcSet={`${heroDesktop1xImage} 1x, ${heroDesktop2xImage} 2x`}
              media="(min-width:1728px)"
            />
            <source
              srcSet={`${heroMobileImage} 1x`}
              media="(max-width:1000px)"
            />

            <img src={heroMobileImage} alt="the waiter writes down the order" />
          </picture>

          <Comment
            className="client-hero__comment"
            title={
              isDesktop
                ? "“We edited the menu after using this app. Now our sales are 30% higher“"
                : "“Thanks to Choicie, we edited the menu, which resulted in 30% increase in sales“"
            }
            name="Anastasia Glorman,"
            Icon={positiveIcon}
            coFounder="co-fouder @syngenta"
          />
        </div>
      </Container>
    </section>
  );
};

export default ClientHeroSection;
