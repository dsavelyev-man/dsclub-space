import React from "react";
import { useDispatch } from "react-redux";
import { update } from "../../../../store/reducers/widgets/widgetsReducer";
import join from "lodash/join";

const classNames = {
  input:
    "items-center mt-2 mx-2 w-full ds-controller__text text-left space-x-3 px-4 h-8 ring-1 ring-slate-900/10 " +
    "hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded bg-slate-800 ring-0 text-slate-300 highlight-white/5",
  container: "py-2",
  label: "mx-2",
  content: "",
};

const TextController = (props) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    props.controller.setValue(e.target.value);

    dispatch(update(props.guid));
  };

  return (
    <div className={classNames.container}>
      {props.controller.label && (
        <label className={classNames.label}>{props.controller.label}</label>
      )}
      <input
        className={classNames.input}
        defaultValue={props.controller.value}
        placeholder={props.controller.default || props.controller.extra?.placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextController;
