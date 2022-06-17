import "./scss/app.scss";
import "normalize.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Routing from "./Routing";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </Provider>
  );
};

const root = createRoot(document.getElementById("dsclub"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
