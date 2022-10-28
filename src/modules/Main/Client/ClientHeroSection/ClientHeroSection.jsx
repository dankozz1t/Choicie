import React from "react";

import Container from "shared/components/Container";

import heroImage from "assets/images/ClientHeroSection/client-hero-desktop@1x.png";

import Comment from "./components/Comment";
import { ReactComponent as positiveIcon } from "assets/icons/Comment/01_positive-review.svg";

import "./ClientHeroSection.scss";

const ClientHeroSection = () => {
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
          <img src={heroImage} alt="the waiter writes down the order" />

          <Comment
            className="client-hero__comment"
            title=" “We edited the menu after using this app. Now our sales are 30% higher“"
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
