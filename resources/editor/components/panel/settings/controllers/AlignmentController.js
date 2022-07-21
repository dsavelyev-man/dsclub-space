import React from "react";
import { useDispatch } from "react-redux";
import { update } from "../../../../store/reducers/widgets/widgetsReducer";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import SubjectIcon from "@mui/icons-material/Subject";
import join from "lodash/join";

const classNames = {
  container: "flex pr-2",
  tab: (active) =>
    join(
      [
        "bg-slate-800 p-1 first:rounded-l last:rounded-r cursor-pointer",
        active ? "border border-slate-500" : undefined,
      ],
      " "
    ),
};

const AlignmentController = (props) => {
  const dispatch = useDispatch();
  const extra = props.controller.extra || {};
  const [value, setValue] = React.useState(props.controller.getValue());

  const handleChange = (newValue) => {
    props.controller.setValue(newValue === value ? null : newValue);

    setValue(newValue === value ? null : newValue);
    dispatch(update(props.guid));
  };

  return (
    <div className={classNames.container}>
      {extra.left !== undefined && (
        <div
          onClick={() => handleChange(extra.left)}
          className={classNames.tab(value === extra.left)}
        >
          <AlignHorizontalLeftIcon />
        </div>
      )}
      {extra.center !== undefined && (
        <div
          onClick={() => handleChange(extra.center)}
          className={classNames.tab(value === extra.center)}
        >
          <AlignHorizontalCenterIcon />
        </div>
      )}
      {extra.right !== undefined && (
        <div
          onClick={() => handleChange(extra.right)}
          className={classNames.tab(value === extra.right)}
        >
          <AlignHorizontalRightIcon />
        </div>
      )}
      {extra.stretch !== undefined && (
        <div
          onClick={() => handleChange(extra.stretch)}
          className={classNames.tab(value === extra.stretch)}
        >
          <SubjectIcon />
        </div>
      )}
    </div>
  );
};

export default AlignmentController;
