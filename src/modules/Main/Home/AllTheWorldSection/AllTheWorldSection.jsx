import React from "react";
import PropTypes from "prop-types";

import Container from "shared/components/Container";

import { ReactComponent as MapDesktopIcon } from "assets/icons/AllTheWorldSection/01_desktop-map.svg";
import { ReactComponent as MapMobileIcon } from "assets/icons/AllTheWorldSection/01_mobile-map.svg";

import "./AllTheWorldSection.scss";

const AllTheWorldSection = ({ isDesktop }) => {
  return (
    <section className="all-the-world">
      <Container className="all-the-world__container">
        <p className="all-the-world__text">
          We work with cafe and restaurant owners from
        </p>
        <h2 className="all-the-world__title">
          {isDesktop ? "All the world" : "10 countries, 5 continents"}
        </h2>
        <p className="all-the-world__description">
          <span className="all-the-world__description--margin">
            And there will be more!
          </span>
          Choicie is ready to work internationally. We work with customers in 8
          different time zones..
        </p>

        {isDesktop ? (
          <MapDesktopIcon className="all-the-world__icon" />
        ) : (
          <MapMobileIcon width="100%" />
        )}
      </Container>
    </section>
  );
};

AllTheWorldSection.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default AllTheWorldSection;
