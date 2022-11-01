import React from "react";
import PropTypes from "prop-types";

import Container from "shared/components/Container";
import SectionTitle from "shared/components/SectionTitle";
import Button from "shared/components/Button";
import CapabilitiesList from "./components/CapabilitiesList";

import { ReactComponent as NoBarrierIcon } from "assets/icons/HowToUseSection/05_noBarrier.svg";
import { ReactComponent as ReviewsIcon } from "assets/icons/HowToUseSection/06_reviews.svg";
import { ReactComponent as NoInstallIcon } from "assets/icons/HowToUseSection/07_noInstall.svg";

import "./HowToUseSection.scss";

const HowToUseSection = ({ isDesktop }) => {
  return (
    <section className="how-to-use" id="how-to-use">
      <Container>
        <SectionTitle className="how-to-use__title">
          How do I use Choicie?
        </SectionTitle>

        <div className="how-to-use__wrapper">
          <CapabilitiesList isDesktop={isDesktop} />

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
            <Button secondary medium className="how-to-use__button">
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

HowToUseSection.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default HowToUseSection;
