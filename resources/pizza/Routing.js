import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SystemHeader from "./components/systemHeader/SystemHeader";
import Navbar from "./components/navbar/Navbar";
import Main from "./pages/main/Main";
import Category from "./pages/category/Category";
import ProductList from "./components/product/ProductList";

const ROUTES = [
  {
    path: "/pizza",
    element: <Main />,
  },
  {
    path: "/pizza/category/:category",
    element: <Category />,
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
