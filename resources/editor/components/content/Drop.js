import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { dropWidget } from "../../store/reducers/widgets/widgetsReducer";
import { toSettings } from "../../store/reducers/panel/panelReducer";
import { setDrag } from "../../store/reducers/drag/dragReducer";

const classNames = {
  container: "m-2 p-8 flex justify-center bg-slate-200 align-center",
};

const Drop = () => {
  const dispatch = useDispatch();

  const [collectedProps, drop] = useDrop(() => ({
    accept: "widget",
    drop: (item) => {
      dispatch(dropWidget(item.name));
      dispatch(toSettings(window.ds.lastCreated));
      dispatch(setDrag(false));
    },
  }));

  return (
    <div ref={drop} className={classNames.container}>
      Drop here
    </div>
  );
};

export default Drop;
