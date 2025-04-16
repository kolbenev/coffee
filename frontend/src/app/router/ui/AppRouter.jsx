import React from "react";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "../config/routerConfig.jsx";
import { useScrollTo } from "../lib/hooks/useScrollTo.jsx";

const AppRouter = () => {
  useScrollTo();
  
  return (
    <Routes>
      {routerConfig.map(({ path, element }) => (
        <Route element={<Layout />}>
          <Route key={path} path={path} element={element} />
        </Route>
      ))}
    </Routes>
  );
};

export default AppRouter;
