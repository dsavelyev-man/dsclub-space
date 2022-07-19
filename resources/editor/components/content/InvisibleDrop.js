import React from "react";
import { useDrop } from "react-dnd";
import { dropWidget } from "../../store/reducers/widgets/widgetsReducer";
import { useDispatch, useSelector } from "react-redux";

const classNames = {
  top: "absolute h-3/6 w-full top-0 left-0",
  bottom: "absolute h-3/6 w-full bottom-0 left-0",
};

const InvisibleDrop = ({ element }) => {
  const guid = element.id.replace("dsElement-", "");
  const dispatch = useDispatch();
  const drag = useSelector((state) => state.drag);

  const [collectedPropsTop, dropTop] = useDrop(() => ({
    accept: "widget",
    drop: (item) => {
      dispatch(dropWidget(item.name));
    },
    collect: (monitor) => {
      return {
        over: monitor.isOver(),
      };
    },
  }));
  const [collectedPropsBottom, dropBottom] = useDrop(() => ({
    accept: "widget",
    drop: (item) => {
      dispatch(dropWidget(item.name));
    },
    collect: (monitor) => {
      return {
        over: monitor.isOver(),
      };
    },
  }));

  React.useEffect(() => {
    element.style.position = "relative";
  }, []);

  React.useEffect(() => {
    if (collectedPropsTop.over) {
      element.style.borderTop = "20px solid rgb(49 46 129)";
    } else {
      element.style.borderTop = "";
    }

    if (collectedPropsBottom.over) {
      element.style.borderBottom = "20px solid rgb(49 46 129)";
    } else {
      element.style.borderBottom = "";
    }
  }, [collectedPropsTop, collectedPropsBottom]);

  return drag.dragging ? (
    <>
      <div
        ref={dropTop}
        className={classNames.top}
        style={
          collectedPropsTop.over
            ? {
                height: `calc(50% + 20px)`,
                transform: "translateY(-20px)",
              }
            : {}
        }
      />
      <div
        ref={dropBottom}
        className={classNames.bottom}
        style={
          collectedPropsBottom.over
            ? {
                height: `calc(50% + 20px)`,
                transform: "translateY(20px)",
              }
            : {}
        }
      />
    </>
  ) : (
    ""
  );
};

export default InvisibleDrop;
