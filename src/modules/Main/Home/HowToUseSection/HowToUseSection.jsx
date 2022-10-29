import React from "react";

import Container from "shared/components/Container";
import Button from "shared/components/Button";
import CapabilitiesList from "./components/CapabilitiesList";

import { ReactComponent as NoBarrierIcon } from "assets/icons/HowToUseSection/05_noBarrier.svg";
import { ReactComponent as ReviewsIcon } from "assets/icons/HowToUseSection/06_reviews.svg";
import { ReactComponent as NoInstallIcon } from "assets/icons/HowToUseSection/07_noInstall.svg";

import "./HowToUseSection.scss";

const HowToUseSection = () => {
  return (
    <section className="how-to-use" id="how-to-use">
      <Container>
        <h2 className="how-to-use__title">How do I use Choicie?</h2>
        <div className="how-to-use__wrapper">
          <CapabilitiesList />

          <div className="get-started">
            <ul className="get-started__list">
              <li className="get-started__item">
                <NoBarrierIcon />
                <h3 className="get-started__title">No language barrier</h3>
              </li>
              <li className="get-started__item">
                <ReviewsIcon />
                <h3 className="get-started__title">
                  No need to search for reviews — all collected in one place
                </h3>
              </li>
              <li className="get-started__item">
                <NoInstallIcon />
                <h3 className="get-started__title">
                  No need to install any translator — all you need is Choicie
                </h3>
              </li>
            </ul>
            <Button secondary medium textDark className="how-to-use__button">
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowToUseSection;
