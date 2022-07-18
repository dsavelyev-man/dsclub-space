import React from "react";
import Header from "./Header";
import "../../scss/panel.scss";
import { useSelector } from "react-redux";
import Widgets from "./widgets/Widgets";

const classNames = {
  container: "h-screen ds-panel fixed w-72 bg-slate-800",
};

const Panel = () => {
  const panel = useSelector((state) => state.panel);

  let content;

  switch (panel.current) {
    default:
      content = <Widgets />;
  }

  return (
    <div className={classNames.container}>
      <Header />
      {content}
    </div>
  );
};

export default Panel;
