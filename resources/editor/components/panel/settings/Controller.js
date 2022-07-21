import React from "react";
import join from "lodash/join";

const classNames = {
  container: (variant) =>
    join(["py-2", variant === 1 ? "flex items-center justify-between w-full" : undefined], " "),
  label: "mx-2",
  content: "",
};

const Controller = (props) => {
  let variant = 0;

  if (["AlignmentController"].indexOf(props.controller.component.name) !== -1) {
    variant = 1;
  }

  return (
    <div className={classNames.container(variant)}>
      <label className={classNames.label}>{props.controller.label}</label>
      <div>{React.createElement(props.controller.component, props)}</div>
    </div>
  );
};

export default Controller;
