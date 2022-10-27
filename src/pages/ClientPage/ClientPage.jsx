import React from "react";

import Header from "modules/Header";

import ClientHeroSection from "modules/Main/Client/ClientHeroSection";
import clientNavigationItems from "./clientNavigationItems.json";

import RestaurantsTrustSection from "modules/Main/Client/RestaurantsTrustSection";
import Footer from "modules/Footer";

const ClientPage = () => {
  return (
    <div className="client-background">
      <Header navigationItems={clientNavigationItems} />
      <main>
        <ClientHeroSection />
        <RestaurantsTrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default ClientPage;
