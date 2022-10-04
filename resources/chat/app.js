import "./scss/app.scss";
import "normalize.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Routing from "./Routing";
import { Provider } from "react-redux";
import store from "./store/store";
import Ws from "./classes/Ws";

window.ws = new Ws()

window.ws.io.on("text", (text) => {
  console.log(text)
})

const App = () => {

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

const root = createRoot(document.getElementById("dsclub"));

root.render(<App />);
