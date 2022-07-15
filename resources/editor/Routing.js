import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Editor from "./pages/editor/Editor";

const ROUTES = [
  {
    path: "/editor",
    element: <Editor />,
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
