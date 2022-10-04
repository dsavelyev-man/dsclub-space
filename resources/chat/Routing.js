import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preview from "./pages/preview/Preview";
import Home from "./pages/home/Home";
import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";
import useAuth from "./hooks/useAuth";
import { useSelector } from "react-redux";
import Friends from "./pages/friends/Friends";
import Messenger from "./pages/messenger/Messenger";

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
  {
    path: "/chat/messenger",
    element: <Messenger />,
  },
  {
    path: "/chat/messenger/:id",
    element: <Messenger />,
  },
  {
    path: "/chat/friends",
    element: <Friends />,
  },
  {
    path: "/chat/preview",
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
