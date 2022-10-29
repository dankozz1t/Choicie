import React from "react";
import { useMediaQuery } from "react-responsive";

import Container from "shared/components/Container";
import Button from "shared/components/Button";

import { ReactComponent as QualityIcon } from "assets/icons/StagesDevelopment/01_quality.svg";
import { ReactComponent as ReputationIcon } from "assets/icons/StagesDevelopment/02_reputation.svg";
import { ReactComponent as VisibilityIcon } from "assets/icons/StagesDevelopment/03_visibility.svg";
import { ReactComponent as UserIcon } from "assets/icons/StagesDevelopment/04_user.svg";
import { ReactComponent as HappyCustomerIcon } from "assets/icons/StagesDevelopment/05_happy-customer.svg";
import { ReactComponent as ChartIcon } from "assets/icons/StagesDevelopment/06_chart.svg";

import "./StagesDevelopmentSection.scss";

const StagesDevelopmentSection = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <section className="stages-development">
      <Container>
        <h2 className="stages-development__title">
          Choicie for cafes and restaurants. Five growth drivers for your
          development
        </h2>
        <p className="stages-development__description">
          Choicie helps you analyze user actions and improve your cafe or
          restaurant.
        </p>

        <ul className="stages-development__list">
          <li className="stages-development__item">
            <QualityIcon />
            <h3 className="stages-development__icon-description">
              Quality of Service
            </h3>
          </li>
          <li className="stages-development__item">
            <ReputationIcon />
            <h3 className="stages-development__icon-description">
              Reputation and promotion on the web
            </h3>
          </li>
          <li className="stages-development__item">
            <VisibilityIcon />
            <h3 className="stages-development__icon-description">Visibility</h3>
          </li>
          <li className="stages-development__item">
            <UserIcon />
            <h3 className="stages-development__icon-description">
              Number of orders
            </h3>
          </li>
          <li className="stages-development__item">
            <HappyCustomerIcon />
            <h3 className="stages-development__icon-description">
              Convenience of work with clients
            </h3>
          </li>
        </ul>
        <h3 className="stages-development__button-label">What Does it Take?</h3>
        <Button primary medium className="stages-development__button">
          Become a Choicie partner!
        </Button>
      </Container>
      <ChartIcon
        width={isDesktop ? null : "100%"}
        height={isDesktop ? null : "100%"}
        className="stages-development__chart"
      />
    </section>
  );
};

export default StagesDevelopmentSection;
