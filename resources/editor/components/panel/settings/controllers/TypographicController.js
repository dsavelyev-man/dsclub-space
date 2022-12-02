import React from "react";
import { useDispatch } from "react-redux";
import { update } from "../../../../store/reducers/widgets/widgetsReducer";
import TextFieldsIcon from '@mui/icons-material/TextFields';
import WebFont from "webfontloader"
import { setEvent } from "../../../../store/reducers/typography/typographyReducer";
import { v4 as uuid } from "uuid";

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
  popover: "absolute",
};

const TypographicController = (props) => {
  const dispatch = useDispatch();
  const [typographic, setTypographic] = React.useState(props.controller.value);

  const onContent = (e) => {
    const button = e.currentTarget;

    const boundingClientRect = button.getBoundingClientRect()

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
      <button onClick={onContent} className={classNames.button}>
        <TextFieldsIcon/>
      </button>
    </div>
  );
};

export default TypographicController;
