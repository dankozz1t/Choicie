import React from "react";
import PropTypes from "prop-types";

import Container from "shared/components/Container";
import SectionTitle from "shared/components/SectionTitle";
import OfferList from "./components/OfferList";

import "./DashboardSection.scss";

const DashboardSection = ({ isDesktop }) => {
  return (
    <section className="dashboard" id="about">
      <Container className="dashboard__container">
        <h2 className="dashboard__sub-title">Dashboard Performance</h2>

        <SectionTitle className="dashboard__title" tag="h3">
          Manage your menu so your customers’ll like it
        </SectionTitle>

        <p className="dashboard__description">
          We created an advanced dashboard. You can see: it’s very easy to
          implement our product.
        </p>

        <OfferList isDesktop={isDesktop} />
      </Container>
    </section>
  );
};

DashboardSection.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default DashboardSection;
