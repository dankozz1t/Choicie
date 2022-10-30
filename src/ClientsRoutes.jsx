import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("pages/HomePage"));
const ClientPage = lazy(() => import("pages/ClientPage"));
const DemoApiPage = lazy(() => import("pages/DemoApiPage"));

const ClientsRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="client" element={<ClientPage />} />
        <Route path="demo-api" element={<DemoApiPage />} />
      </Routes>
    </Suspense>
  );
};

export default ClientsRoutes;
