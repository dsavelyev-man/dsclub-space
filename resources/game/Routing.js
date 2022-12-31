import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import useAuth from "../chat/hooks/useAuth";
import { useSelector } from "react-redux";

const ROUTES = [
  {
    path: "/game",
    element: <Home />,
  },
];

const Routing = () => {
  useAuth()
  const loaded = useSelector((s) => s.user.loaded)

  return (
    loaded && (
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route) => (
            <Route path={route.path} key={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    )
  );
};

export default Routing;
