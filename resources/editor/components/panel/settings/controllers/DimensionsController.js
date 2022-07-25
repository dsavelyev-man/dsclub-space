import React from "react";
import { useDispatch } from "react-redux";
import { update } from "../../../../store/reducers/widgets/widgetsReducer";
import LinkIcon from "@mui/icons-material/Link";
import join from "lodash/join";

const classNames = {
  input:
    "items-center text-center w-14 space-x-3 h-8 ring-1 ring-slate-900/10 " +
    "hover:ring-slate-300 focus:outline-none focus:ring-2 relative focus:z-10 border-r border-slate-700 focus:ring-sky-500 " +
    "shadow-sm bg-slate-800 ring-0 text-slate-300 highlight-white/5",
  container: "py-2 ds-controller__dimensions",
  label: "mx-2",
  content: "",
  wrapper: "flex mt-2 mx-2 items-start",
  bind: (bind) =>
    join(
      [
        " flex justify-center align-center border-none cursor-pointer rounded-r",
        bind ? "bg-sky-500 text-slate-900" : undefined,
      ],
      " "
    ),
  inputContainer: "flex flex-col justify-center items-center",
  inputLabel: "text-xs py-1",
};

const DimensionsController = (props) => {
  const dispatch = useDispatch();
  const value = props.controller.value || {};
  const topInput = React.createRef();
  const rightInput = React.createRef();
  const bottomInput = React.createRef();
  const leftInput = React.createRef();

  React.useEffect(() => {
    if (!props.controller.value) {
      props.controller.setValue({});
    }
  }, []);

  const handleChange = (e, index) => {
    const value = props.controller.value;

    if (!props.controller.value.bind) {
      value[index] = e.target.value;
    } else {
      value.top = e.target.value;
      value.right = e.target.value;
      value.bottom = e.target.value;
      value.left = e.target.value;

      topInput.current.value = e.target.value;
      rightInput.current.value = e.target.value;
      bottomInput.current.value = e.target.value;
      leftInput.current.value = e.target.value;
    }

    props.controller.setValue(value);

    dispatch(update(props.guid));
  };

  const bindChange = (e) => {
    const value = props.controller.value;

    value.bind = !value.bind;

    if (value.bind) {
      e.currentTarget.classList.add("bg-sky-500");
      e.currentTarget.classList.add("text-slate-900");
    } else {
      e.currentTarget.classList.remove("bg-sky-500");
      e.currentTarget.classList.remove("text-slate-900");
    }

    props.controller.setValue(value);

    dispatch(update(props.guid));
  };

  return (
    <div className={classNames.container}>
      {props.controller.label && (
        <label className={classNames.label}>{props.controller.label}</label>
      )}
      <div className={classNames.wrapper}>
        <div className={classNames.inputContainer}>
          <input
            ref={topInput}
            onChange={(e) => handleChange(e, "top")}
            type="number"
            defaultValue={value.top}
            className={classNames.input + " rounded-l"}
          />
          <label className={classNames.inputLabel}>TOP</label>
        </div>
        <div className={classNames.inputContainer}>
          <input
            ref={rightInput}
            onChange={(e) => handleChange(e, "right")}
            type="number"
            defaultValue={value.right}
            className={classNames.input}
          />
          <label className={classNames.inputLabel}>RIGHT</label>
        </div>
        <div className={classNames.inputContainer}>
          <input
            ref={bottomInput}
            onChange={(e) => handleChange(e, "bottom")}
            type="number"
            defaultValue={value.bottom}
            className={classNames.input}
          />
          <label className={classNames.inputLabel}>BOTTOM</label>
        </div>
        <div className={classNames.inputContainer}>
          <input
            ref={leftInput}
            onChange={(e) => handleChange(e, "left")}
            type="number"
            defaultValue={value.left}
            className={classNames.input}
          />
          <label className={classNames.inputLabel}>LEFT</label>
        </div>
        <div onClick={bindChange} className={classNames.input + classNames.bind(value.bind)}>
          <LinkIcon />
        </div>
      </div>
    </div>
  );
};

export default DimensionsController;
