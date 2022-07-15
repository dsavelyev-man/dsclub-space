import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";

const classNames = {
  container:
    "flex justify-between ds-panel__header py-3 shadow bg-slate-900 p-2 align-center text-slate-100",
  menu: "cursor-pointer",
  widgets: "cursor-pointer",
  header: "cursor-pointer",
};

const Header = () => {
  return (
    <div className={classNames.container}>
      <div className={classNames.menu}>
        <MenuIcon />
      </div>
      <h6 className={classNames.header}>ds-editor</h6>
      <div className={classNames.widgets}>
        <AppsIcon />
      </div>
    </div>
  );
};

export default Header;
