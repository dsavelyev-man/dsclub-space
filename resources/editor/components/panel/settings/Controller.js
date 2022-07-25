import React from "react";

const Controller = (props) => {
  return <div>{React.createElement(props.controller.component, props)}</div>;
};

export default Controller;
