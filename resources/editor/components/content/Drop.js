import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { dropWidget } from "../../store/reducers/widgets/widgetsReducer";
import { toSettings } from "../../store/reducers/panel/panelReducer";

const classNames = {
  container: "m-2 p-8 flex justify-center bg-slate-200 align-center",
};

const Drop = () => {
  const dispatch = useDispatch();
  const lastWidget = useSelector((state) => state.widgets.last);

  const [collectedProps, drop] = useDrop(() => ({
    accept: "widget",
    drop: (item) => {
      dispatch(dropWidget(item.name));
      dispatch(toSettings(lastWidget));
    },
  }));

  return (
    <div ref={drop} className={classNames.container}>
      Drop here
    </div>
  );
};

export default Drop;
