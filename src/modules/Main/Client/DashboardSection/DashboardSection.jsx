import React from "react";
import { useMediaQuery } from "react-responsive";

import Container from "shared/components/Container";

import { ReactComponent as CreationMenuIcon } from "assets/icons/DashboardSection/01_creation-menu.svg";
import { ReactComponent as BiggestFeedbackIcon } from "assets/icons/DashboardSection/02_biggest-feedback.svg";

import "./DashboardSection.scss";

const DashboardSection = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <section className="dashboard" id="about">
      <Container className="dashboard__container">
        <h2 className="dashboard__sub-title">Dashboard Performance</h2>
        <h3 className="dashboard__title">
          Manage your menu so your customers’ll like it
        </h3>
        <p className="dashboard__description">
          We created an advanced dashboard. You can see: it’s very easy to
          implement our product.
        </p>

        <ul className="offer-list">
          <li className="offer-list__item offer-list__item--light-blue">
            <h4 className="offer-list__title">
              <span className="offer-list__title-span">Creation of</span> a
              Restaurant menu
            </h4>
            <p className="offer-list__description">
              Upload your cafe or restaurant menu to the app. Choicie will
              automatically translate it into the users’ native language and add
              food photos.
            </p>
            <CreationMenuIcon
              width={isDesktop ? null : "240px"}
              height={isDesktop ? null : "150px"}
              className="offer-list__icon"
            />
          </li>

          <li className="offer-list__item offer-list__item--light-orange">
            <h4 className="offer-list__title">
              The biggest feedback from your customers
            </h4>
            <p className="offer-list__description">
              Rating on the waiter’s work and speed of service, review of the
              cleanliness of the place and the taste of the food — all the
              feedback is available in one place.
            </p>
            <BiggestFeedbackIcon
              width={isDesktop ? null : "240px"}
              height={isDesktop ? null : "150px"}
              className="offer-list__icon"
            />
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default DashboardSection;
