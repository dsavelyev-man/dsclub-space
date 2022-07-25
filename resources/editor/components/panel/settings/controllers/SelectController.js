import React from "react";
import { useDispatch } from "react-redux";
import { update } from "../../../../store/reducers/widgets/widgetsReducer";

const classNames = {
  select:
    "items-center mt-2 mx-2 min-w-select ds-controller__text text-left space-x-3 px-4 h-8 ring-1 ring-slate-900/10 " +
    "hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded bg-slate-800 ring-0 text-slate-300 highlight-white/5",
  container: "py-2",
  label: "mx-2",
  content: "",
};

const SelectController = (props) => {
  const dispatch = useDispatch();
  const options = props.controller.extra?.options || [];

  const handleChange = (e) => {
    props.controller.setValue(e.target.value);

    dispatch(update(props.guid));
  };

  return (
    <div className={classNames.container}>
      {props.controller.label && (
        <label className={classNames.label}>{props.controller.label}</label>
      )}
      <select
        defaultValue={props.controller.value}
        onChange={handleChange}
        className={classNames.select}
      >
        {options.map((option) => (
          <option value={option[0]} key={option[0]}>
            {option[1]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectController;
