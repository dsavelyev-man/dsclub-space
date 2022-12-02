import React from "react";
import Header from "./Header";
import "../../scss/panel.scss";
import { useSelector } from "react-redux";
import Widgets from "./widgets/Widgets";
import Settings from "./settings/Settings";
import Menu from "./Menu";
import TypographicSelectContent from "./settings/controllers/components/TypographicSelectContent";

const classNames = {
  container: "h-screen ds-panel fixed w-72 bg-slate-800",
};

const Panel = () => {
  const panel = useSelector((state) => state.panel);

  let content;

  switch (panel.current) {
    case "settings":
      content = <Settings panel={panel} />;
      break;
    default:
      content = <Widgets />;
  }

  return (
    <div className={classNames.container}>
      <Header />
      {content}
      <Menu />
      <TypographicSelectContent/>
    </div>
  );
};

export default Panel;
