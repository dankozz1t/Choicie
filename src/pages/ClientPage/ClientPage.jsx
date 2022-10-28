import React from "react";

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
  return (
    <div className="client-background">
      <Header navigationItems={clientNavigationItems} />
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
