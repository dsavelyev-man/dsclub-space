import React from "react";
import axios from "axios";

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

  return <button onClick={exportFile}>Export</button>;
};

export default Menu;
