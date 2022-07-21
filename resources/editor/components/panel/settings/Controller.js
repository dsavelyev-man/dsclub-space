import React from "react";

const classNames = {
  container: "",
  label: "",
  content: "",
};

const Controller = (props) => {
  return (
    <div className={classNames.container}>
      <label>{props.controller.label}</label>
      <div>{React.createElement(props.controller.component, props)}</div>
    </div>
  );
};

export default Controller;
