import React from "react";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ClearIcon from "@mui/icons-material/Clear";

const classNames = {
  container: "absolute w-full h-0 top-0 left-0 flex justify-center",
  button: "bg-slate-800 text-slate-100 p-1 first:rounded-l last:rounded-r",
  content: "",
};

const MenuContainerWidget = ({ element }) => {
  const [show, setShow] = React.useState(false);
  const guid = element.id.replace("dsElement-", "");

  const firstWidget = window.ds.widgets.getFirstContainer();
  const isFirst = firstWidget?.guid === guid;

  const changeShow = (show) => {
    setShow(show);
  };

  const handleLave = () => {
    changeShow(false);

    element.removeEventListener("mouseleave", handleLave);
  };

  const handleEnter = () => {
    changeShow(true);

    element.addEventListener("mouseleave", handleLave);
  };

  React.useEffect(() => {
    element.addEventListener("mouseenter", handleEnter);

    return () => {
      element.removeEventListener("mouseleave", handleLave);
      element.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  return (
    show && (
      <div className={classNames.container}>
        <div className={classNames.content}>
          <button className={classNames.button} title="Edit container">
            <BorderAllIcon />
          </button>
          <button className={classNames.button} title="Edit container">
            <ClearIcon />
          </button>
        </div>
      </div>
    )
  );
};

export default MenuContainerWidget;
