import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import { useDispatch } from "react-redux";
import { toPanel } from "../../store/reducers/panel/panelReducer";

const classNames = {
  container:
    "flex justify-between ds-panel__header py-3 shadow-lg shadow-slate-900/10 bg-slate-900 p-2 align-center text-slate-100",
  widgets: "cursor-pointer",
  header: "cursor-pointer ml-4",
};

const Header = () => {
  const dispatch = useDispatch();

  const toWidgets = () => {
    dispatch(toPanel("widgets"));
  };

  return (
    <div className={classNames.container}>
      <h6 className={classNames.header}>HTML constructor</h6>
      <div onClick={toWidgets} title="Widgets" className={classNames.widgets}>
        <AppsIcon />
      </div>
    </div>
  );
};

export default Header;
