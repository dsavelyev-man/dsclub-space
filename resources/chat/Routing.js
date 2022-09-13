import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preview from "./pages/preview/Preview";
import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";
import useAuth from "./hooks/useAuth";
import { useSelector } from "react-redux";

const ROUTES = [
  {
    path: "/chat/registration",
    element: <Registration/>
  },
  {
    path: "/chat/login",
    element: <Login/>
  },
  {
    path: "/chat",
    element: <Preview />,
  },
];

const Routing = () => {
  useAuth()
  const loaded = useSelector((s) => s.user.loaded)

  return (
    loaded ? (
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route) => (
            <Route path={route.path} key={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    ) : ""
  );
};

export default Routing;
