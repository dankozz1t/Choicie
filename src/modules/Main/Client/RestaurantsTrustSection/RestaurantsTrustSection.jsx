import React from "react";
import Container from "shared/components/Container";

import { ReactComponent as CadburyIcon } from "assets/icons/RestaurantsTrustSection/01_cadbury.svg";
import { ReactComponent as KuspyKremeIcon } from "assets/icons/RestaurantsTrustSection/02_kuspy-kreme.svg";
import { ReactComponent as JustEatIcon } from "assets/icons/RestaurantsTrustSection/03_just-eat.svg";
import { ReactComponent as TheFridaysIcon } from "assets/icons/RestaurantsTrustSection/04_the-fridays.svg";
import { ReactComponent as SyngentaIcon } from "assets/icons/RestaurantsTrustSection/05_syngenta.svg";

import "./RestaurantsTrustSection.scss";

const RestaurantsTrustSection = () => {
  return (
    <section className="restaurants-trust">
      <Container className="restaurants-trust__container">
        <h2 className="restaurants-trust__title">
          500+ RESTAURANTS TRUST CHOICIE
        </h2>

        <ul className="restaurants-trust__list">
          <li>
            <CadburyIcon />
          </li>
          <li>
            <KuspyKremeIcon />
          </li>
          <li>
            <JustEatIcon />
          </li>
          <li>
            <TheFridaysIcon />
          </li>
          <li>
            <SyngentaIcon />
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default RestaurantsTrustSection;
