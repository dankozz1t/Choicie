import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

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

const ClientPage = () => {
  const isDesktop = useMediaQuery({ minWidth: 1728 });
  const [isBurgerMenu, setIsBurgerMenu] = useState(isDesktop);

  useEffect(() => {
    setIsBurgerMenu(isDesktop);
  }, [isDesktop]);

  const handleMenuClick = () => {
    setIsBurgerMenu(!isBurgerMenu);
  };

  return (
    <div
      className={classNames(
        "client-background-color",
        isBurgerMenu && !isDesktop && "client-background-color--dark"
      )}
    >
      <Header
        isBurgerMenu={isBurgerMenu}
        isDesktop={isDesktop}
        handleMenuClick={handleMenuClick}
        navigationItems={clientNavigationItems}
      />
      <main>
        <ClientHeroSection />
        <RestaurantsTrustSection />
        <DashboardSection />
        <StagesDevelopmentSection />
        <ReviewSection />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
};

export default ClientPage;
