import React from "react";
import { useDispatch } from "react-redux";
import { update } from "../../../../store/reducers/widgets/widgetsReducer";
import TextFieldsIcon from '@mui/icons-material/TextFields';
import WebFont from "webfontloader"
import { setEvent } from "../../../../store/reducers/typography/typographyReducer";
import { v4 as uuid } from "uuid";
import { Popover } from "@headlessui/react";


// WebFont.load({
//   google: {
//     families: ['Droid Sans', 'Droid Serif']
//   }
// })

const classNames = {
  button: "w-8 h-8 rounded bg-slate-800 mr-2 outline-none",
  container: "py-2 flex justify-between items-center",
  label: "mx-2",
  content: "w-40 bg-slate-800 rounded",
  popover: "absolute bg-slate-600 p-2 rounded",
  familyInput: "cursor-pointer bg-slate-900 rounded-md p-1"
};

const TypographicController = (props) => {
  const dispatch = useDispatch();
  const [typographic, setTypographic] = React.useState(props.controller.value);

  const onFamilyOpen = (e) => {
    e.preventDefault()

    const input = e.currentTarget;

    const boundingClientRect = input.getBoundingClientRect()

    window.ds.typographicOnSelect = (font) => {
      console.log(font)
    }

    dispatch(setEvent({
      onSelectUpdate: uuid()
    }))

    const content = window.ds.typographicContentRef.current;

    content.style.left = `${boundingClientRect.x}px`;
    content.style.top = `${boundingClientRect.y + 34}px`;
    content.style.display = "block"
  }

  return (
    <div className={classNames.container}>
      {props.controller.label && (
        <label className={classNames.label}>{props.controller.label}</label>
      )}
      <Popover>
        <Popover.Button className={classNames.button}>
          <TextFieldsIcon/>
        </Popover.Button>
        <Popover.Panel className={classNames.popover}>
          <input
            onClick={onFamilyOpen}
            onFocus={(e) => e.currentTarget.blur()}
            className={classNames.familyInput}
            value={props.controller.value?.family}
            placeholder="Font Family"
          />
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default TypographicController;
