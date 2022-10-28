import React from "react";

import Container from "shared/components/Container";
import Button from "shared/components/Button";

import { ReactComponent as ScanForeignLangIcon } from "assets/icons/HowToUseSection/01_scanForeignLang.svg";
import { ReactComponent as AutomaticallyTranslatedIcon } from "assets/icons/HowToUseSection/02_automaticallyTranslated.svg";
import { ReactComponent as ScanForOrderIcon } from "assets/icons/HowToUseSection/03_scanForOrder.svg";
import { ReactComponent as ShareIcon } from "assets/icons/HowToUseSection/04_share.svg";

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
          <ul className="capabilities__list">
            <li className="capabilities__item">
              <ScanForeignLangIcon />
              <h3 className="capabilities__title">
                Scan the QR-code on the foreign language menu.
              </h3>
            </li>
            <li className="capabilities__item">
              <AutomaticallyTranslatedIcon />
              <h3 className="capabilities__title">
                Automatically get to the online version of menu — it will be
                translated into your native language.
              </h3>
            </li>
            <li className="capabilities__item">
              <ScanForOrderIcon />
              <h3 className="capabilities__title">
                Choose and order one or more dishes you like, then show your
                QR-code from Choicie to the waiter.
              </h3>
            </li>
            <li className="capabilities__item">
              <ShareIcon />
              <h3 className="capabilities__title">
                Share your impressions, tips, and ratings to help other Choicie
                users.
              </h3>
            </li>
          </ul>

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
