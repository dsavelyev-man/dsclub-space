import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

const ROUTES = [
  {
    path: "/sandbox",
    element: <Home />,
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
