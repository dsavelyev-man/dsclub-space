import React from "react";
import PanelItem from "./PanelItem";

const classNames = {
  container: "h-screen w-40 bg-slate-800 flex flex-col"
}

const Panel = () => {
  return <div className={classNames.container}>
    <PanelItem to="/chat/admin/users">Users</PanelItem>
  </div>
}

export default Panel
