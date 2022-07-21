import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import join from "lodash/join";
import Controller from "./Controller";

const classNames = {
  container: "text-slate-300 mb-1 bg-slate-700 shadow-lg shadow-slate-700/10",
  tab: (open) =>
    join(
      [
        "p-2 bg-slate-700 flex justify-between cursor-pointer shadow-lg shadow-slate-900/10 items-center",
        open ? "border-b border-slate-600" : undefined,
      ],
      " "
    ),
  content: "",
};

const Group = (props) => {
  const open = props.index === props.open;

  const changeOpen = () => {
    props.changeOpen(props.index);
  };

  console.log(props.group.toArray());

  return (
    <div className={classNames.container}>
      <div className={classNames.tab(open)} onClick={changeOpen}>
        {props.group._label} <ArrowDropDownIcon className={open ? "rotate-180" : ""} />
      </div>
      {open && (
        <div className={classNames.content}>
          {props.group.toArray().map((controller) => (
            <Controller guid={props.guid} controller={controller} key={controller._name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Group;
