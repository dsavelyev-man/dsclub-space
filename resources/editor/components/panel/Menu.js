import React from "react";
import axios from "axios";

const classNames = {
  container: "absolute bottom-0 left-0 w-full h-10 flex items-center justify-between px-2",
  button: "text-slate-100 bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl",
}

const Menu = () => {
  const exportFile = async () => {
    // а мы цыгане и все сейвим
    const res = await axios.post("/ajax/editor", {
      html: window.ds.widgets.toHtml(),
    });

    if (res.status === 200) {
      window.open(res.data.to, "_blank").focus();
    }
  };

  return <div className={classNames.container}>
    <div/>
    <button className={classNames.button} onClick={exportFile}>Export</button>
  </div>;
};

export default Menu;
