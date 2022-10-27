import React from "react";
import Container from "shared/components/Container";

import "./AllTheWorldSection.scss";

import mapImage from "assets/images/AllTheWorldSection/map.png";

const AllTheWorldSection = () => {
  return (
    <section className="all-the-world">
      <Container className="all-the-world__container">
        <p className="all-the-world__text">
          We work with cafe and restaurant owners from
        </p>
        <h2 className="all-the-world__title">All the world</h2>
        <p className="all-the-world__description">
          <span className="all-the-world__description--margin">
            And there will be more!
          </span>
          Choicie is ready to work internationally. We work with customers in 8
          different time zones..
        </p>

        <img
          src={mapImage}
          alt="A map of the world on which the places where the restaurant exists are marked"
        />
      </Container>
    </section>
  );
};

export default AllTheWorldSection;
