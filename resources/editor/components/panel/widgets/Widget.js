import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { setDrag } from "../../../store/reducers/drag/dragReducer";

const classNames = {
  container:
    "p-4 flex flex-col cursor-pointer justify-center bg-indigo-900 panel-widgets__card rounded text-slate-100 align-center",
  iconWrapper: "flex justify-center mb-2",
  title: "flex justify-center",
};

const Widget = (props) => {
  const dispatch = useDispatch();

  const [{ opacity, isDragging }, dragRef] = useDrag(() => ({
    type: "widget",
    item: props.widget,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
      isDragging: monitor.isDragging(),
    }),
  }));

  React.useEffect(() => {
    dispatch(setDrag(isDragging));
  }, [isDragging]);

  return (
    <div ref={dragRef} style={{ opacity }} className={classNames.container}>
      <div className={classNames.iconWrapper}>{React.cloneElement(props.widget.icon, {})}</div>
      <h4 className={classNames.title}>{props.widget.title}</h4>
    </div>
  );
};

export default Widget;
