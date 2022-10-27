import React from "react";
import Header from "modules/Header";
import clientNavigationItems from "./clientNavigationItems.json";

const ClientPage = () => {
  return (
    <>
      <Header navigationItems={clientNavigationItems} />
      <h2>ClientPage</h2>
    </>
  );
};

export default ClientPage;
