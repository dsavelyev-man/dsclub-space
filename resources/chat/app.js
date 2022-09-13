import "./scss/app.scss";
import "normalize.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Routing from "./Routing";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

const root = createRoot(document.getElementById("dsclub"));

root.render(<App />);
