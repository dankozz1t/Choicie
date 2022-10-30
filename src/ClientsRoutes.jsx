import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const HomePage = lazy(() => import("pages/HomePage"));
const ClientPage = lazy(() => import("pages/ClientPage"));
const DemoApiPage = lazy(() => import("pages/DemoApiPage"));

const ClientsRoutes = () => {
  const isDesktop = useMediaQuery({ minWidth: 1000 });

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage isDesktop={isDesktop} />} />
        <Route path="client" element={<ClientPage isDesktop={isDesktop} />} />
        <Route
          path="demo-api"
          element={<DemoApiPage isDesktop={isDesktop} />}
        />
      </Routes>
    </Suspense>
  );
};

export default ClientsRoutes;
