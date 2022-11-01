import React from "react";

import SectionTitle from "shared/components/SectionTitle";

import { ReactComponent as CreationMenuIcon } from "assets/icons/DashboardSection/01_creation-menu.svg";
import { ReactComponent as BiggestFeedbackIcon } from "assets/icons/DashboardSection/02_biggest-feedback.svg";

import "./OfferList.scss";

const OfferList = ({ isDesktop }) => {
  return (
    <ul className="offer-list">
      <li className="offer-list__item offer-list__item--light-blue">
        <SectionTitle className="offer-list__title" tag="h4">
          <span className="offer-list__title-span">Creation of</span> a
          Restaurant menu
        </SectionTitle>

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
        <SectionTitle className="offer-list__title" tag="h4">
          The biggest feedback from your customers
        </SectionTitle>

        <p className="offer-list__description">
          Rating on the waiter’s work and speed of service, review of the
          cleanliness of the place and the taste of the food — all the feedback
          is available in one place.
        </p>
        <BiggestFeedbackIcon
          width={isDesktop ? null : "240px"}
          height={isDesktop ? null : "150px"}
          className="offer-list__icon"
        />
      </li>
    </ul>
  );
};

export default OfferList;
