import "./scss/app.scss";
import "normalize.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Routing from "./Routing";
// import { getData } from "country-list"

// console.log(getData())

const App = () => {
  return (
    <>
      Hello alexey
      <Routing />
    </>
  );
};

const root = createRoot(document.getElementById("dsclub"));

root.render(<App />);
