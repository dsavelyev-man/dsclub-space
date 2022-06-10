import "./scss/app.scss";
import "normalize.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Routing from "./Routing";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
};

const root = createRoot(document.getElementById("dsclub"));

root.render(<App />);
