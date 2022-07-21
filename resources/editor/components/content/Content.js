import React from "react";
import Drop from "./Drop";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import InvisibleDrop from "./InvisibleDrop";

const classNames = {
  container: "ds-content",
};

const Content = () => {
  const widgets = useSelector((state) => state.widgets);
  const ref = React.useRef();
  const [elements, setElements] = React.useState([]);

  React.useEffect(() => {
    ref.current.innerHTML = window.ds.widgets.toHtml();

    const htmlCollection = document.getElementsByClassName("ds-container");
    const collection = [];

    for (const elem of htmlCollection) {
      collection.push(elem);
    }

    setElements(collection);
  }, [widgets]);

  console.log(window.ds.widgets.toHtml());

  return (
    <>
      {elements.map((elem) => {
        return ReactDOM.createPortal(<InvisibleDrop element={elem} />, elem);
      })}
      <div className={classNames.container}>
        <div ref={ref} />
        <Drop />
      </div>
    </>
  );
};

export default Content;
