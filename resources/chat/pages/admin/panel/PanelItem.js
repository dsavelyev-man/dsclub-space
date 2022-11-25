import React from "react";
import { Link } from "react-router-dom";

const classNames = {
  container: "m-2 text-slate-300"
}

const PanelItem = (props) => {
  return <Link className={classNames.container} to={props.to}>{props.children}</Link>
}

export default PanelItem
