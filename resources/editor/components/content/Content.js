import React from "react";
import Drop from "./Drop";
import { useSelector } from "react-redux";

const classNames = {
  container: "ds-content",
};

const Content = () => {
  const widgets = useSelector((state) => state.widgets);
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current.innerHTML = window.ds.widgets.toHtml();
  }, [widgets]);

  return (
    <div style={{ width: "calc(100vw - 308px)" }} className={classNames.container}>
      <div ref={ref} />
      <Drop />
    </div>
  );
};

export default Content;
