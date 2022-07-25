import React from "react";
import { useDispatch } from "react-redux";
import { update } from "../../../../store/reducers/widgets/widgetsReducer";
import { HexColorPicker } from "react-colorful";
import { Popover } from "@headlessui/react";

const classNames = {
  color: "w-8 h-8 bg-slate-500 rounded",
  button: "mr-2",
  container: "py-2 flex justify-between items-center",
  label: "mx-2",
  content: "",
  popover: "absolute",
};

const ColorController = (props) => {
  const dispatch = useDispatch();
  const [color, setColor] = React.useState(props.controller.value);

  const handleChange = (color) => {
    setColor(color);
    props.controller.setValue(color);

    dispatch(update(props.guid));
  };

  return (
    <div className={classNames.container}>
      {props.controller.label && (
        <label className={classNames.label}>{props.controller.label}</label>
      )}
      <Popover>
        <Popover.Button className={classNames.button}>
          <div
            className={classNames.color}
            style={{
              background: color,
            }}
          ></div>
        </Popover.Button>
        <Popover.Panel className={classNames.popover}>
          <HexColorPicker color={color} onChange={handleChange} />
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default ColorController;
