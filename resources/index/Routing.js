import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preview from "./pages/preview/Preview";

const ROUTES = [
  {
    path: "/",
    element: <Preview />,
  },
];

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route) => (
          <Route path={route.path} key={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
