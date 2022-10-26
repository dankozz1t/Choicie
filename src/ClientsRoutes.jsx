import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Container from "shared/components/Container";

const HomePage = lazy(() => import("pages/HomePage"));
const ClientPage = lazy(() => import("pages/ClientPage"));

const ClientsRoutes = () => {
  return (
    <Container>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="client" element={<ClientPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default ClientsRoutes;
