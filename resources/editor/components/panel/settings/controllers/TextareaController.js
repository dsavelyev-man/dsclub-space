import React from "react";
import { useDispatch } from "react-redux";
import { update } from "../../../../store/reducers/widgets/widgetsReducer";

const classNames = {
  input:
    "hidden sm:flex items-center h-24 mt-2 mx-2 w-full ds-controller__text text-left py-2 space-x-3 px-4 ring-1 ring-slate-900/10 " +
    "hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded bg-slate-800 ring-0 text-slate-300 highlight-white/5",
};

const TextareaController = (props) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    props.controller.setValue(e.target.value);

    dispatch(update(props.guid));
  };

  return (
    <textarea
      className={classNames.input}
      defaultValue={props.controller.value}
      placeholder={props.controller.default}
      onChange={handleChange}
    />
  );
};

export default TextareaController;
