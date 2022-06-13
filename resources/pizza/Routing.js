import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SystemHeader from "./components/systemHeader/SystemHeader";
import Navbar from "./components/navbar/Navbar";
import Main from "./pages/main/Main";

const ROUTES = [
  {
    path: "/pizza",
    element: <Main />,
  },
];

const Routing = () => {
  return (
    <BrowserRouter>
      <SystemHeader />
      <Navbar />
      <Routes>
        {ROUTES.map((route) => (
          <Route path={route.path} key={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
