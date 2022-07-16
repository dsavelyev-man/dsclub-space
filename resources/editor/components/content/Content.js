import React from "react";
import Drop from "./Drop";

const classNames = {
  container: ""
}

const Content = () => {
  return (
    <div style={{ width: "calc(100vw - 308px)" }} className={classNames.container}>
      <Drop />
    </div>
  );
};

export default Content;
