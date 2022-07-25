import React from "react";
import { useDispatch } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";
import TuneIcon from "@mui/icons-material/Tune";
import SettingsIcon from "@mui/icons-material/Settings";
import join from "lodash/join";
import { setTab } from "../../../store/reducers/panel/panelReducer";

const classNames = {
  container: "flex mb-2",
  tab: (tab) =>
    join(
      [
        "h-12 bg-slate-800 w-24 flex justify-center items-center text-slate-200 cursor-pointer",
        tab ? "bg-slate-700 border-b border-slate-600" : undefined,
      ],
      " "
    ),
};

const constants = {
  content: "content",
  style: "style",
  advanced: "advanced",
};

const Tabs = (props) => {
  return (
    <div className={classNames.container}>
      <div
        onClick={() => props.changeTab(constants.content)}
        className={classNames.tab(props.tab === constants.content)}
      >
        <CreateIcon />
      </div>
      <div
        onClick={() => props.changeTab(constants.style)}
        className={classNames.tab(props.tab === constants.style)}
      >
        <TuneIcon />
      </div>
      <div
        onClick={() => props.changeTab(constants.advanced)}
        className={classNames.tab(props.tab === constants.advanced)}
      >
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Tabs;
