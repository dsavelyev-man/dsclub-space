import React from "react";
import "../../scss/pages/preview.scss";

const Preview = () => {
  return (
    <div className="preview">
      <section className="preview-heading"></section>
      <iframe className="preview-iframe" src="https://dsavelyev-man.github.io/" />
    </div>
  );
};

export default Preview;
