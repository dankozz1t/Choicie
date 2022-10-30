import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import PropTypes from "prop-types";

import Header from "modules/Header";

import ClientHeroSection from "modules/Main/Client/ClientHeroSection";
import clientNavigationItems from "./clientNavigationItems.json";

import RestaurantsTrustSection from "modules/Main/Client/RestaurantsTrustSection";
import DashboardSection from "modules/Main/Client/DashboardSection";
import StagesDevelopmentSection from "modules/Main/Client/StagesDevelopmentSection";
import ReviewSection from "modules/Main/Client/ReviewSection/ReviewSection";
import SubscribeSection from "modules/Main/SubscribeSection";
import Footer from "modules/Footer";

import "./ClientPage.scss";

const ClientPage = ({ isDesktop }) => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  !isDesktop && isBurgerMenu
    ? disableBodyScroll(document)
    : enableBodyScroll(document);

  const handleMenuClick = () => {
    setIsBurgerMenu(!isBurgerMenu);
  };

  return (
    <div className="client-background-color">
      <Header
        isBurgerMenu={isBurgerMenu}
        isDesktop={isDesktop}
        handleMenuClick={handleMenuClick}
        navigationItems={clientNavigationItems}
      />
      <main>
        <ClientHeroSection isDesktop={isDesktop} />
        <RestaurantsTrustSection isDesktop={isDesktop} />
        <DashboardSection isDesktop={isDesktop} />
        <StagesDevelopmentSection isDesktop={isDesktop} />
        <ReviewSection />
        <SubscribeSection />
      </main>
      <Footer navigationItems={clientNavigationItems} isDesktop={isDesktop} />
    </div>
  );
};

ClientPage.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default ClientPage;
