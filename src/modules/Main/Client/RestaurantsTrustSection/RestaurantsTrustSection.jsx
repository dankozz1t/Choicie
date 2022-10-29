import React from "react";
import { useMediaQuery } from "react-responsive";

import Container from "shared/components/Container";

import { ReactComponent as CadburyIcon } from "assets/icons/RestaurantsTrustSection/01_cadbury.svg";
import { ReactComponent as KuspyKremeIcon } from "assets/icons/RestaurantsTrustSection/02_kuspy-kreme.svg";
import { ReactComponent as JustEatIcon } from "assets/icons/RestaurantsTrustSection/03_just-eat.svg";
import { ReactComponent as TheFridaysIcon } from "assets/icons/RestaurantsTrustSection/04_the-fridays.svg";
import { ReactComponent as SyngentaIcon } from "assets/icons/RestaurantsTrustSection/05_syngenta.svg";

import "./RestaurantsTrustSection.scss";

const RestaurantsTrustSection = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <section className="restaurants-trust">
      <Container className="restaurants-trust__container">
        <h2 className="restaurants-trust__title">
          500+ RESTAURANTS TRUST CHOICIE
        </h2>

        <ul className="restaurants-trust__list">
          <li>
            <CadburyIcon width={isDesktop ? "100%" : "56px"} />
          </li>
          <li>
            <KuspyKremeIcon width={isDesktop ? "100%" : "69px"} />
          </li>
          <li>
            <JustEatIcon width={isDesktop ? "100%" : "99px"} />
          </li>
          <li>
            <TheFridaysIcon width={isDesktop ? "100%" : "56px"} />
          </li>
          <li>
            <SyngentaIcon width={isDesktop ? "100%" : "80px"} />
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default RestaurantsTrustSection;
