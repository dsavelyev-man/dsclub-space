import React from "react";
import { Link } from "react-router-dom";

const classNames = {
  link: "flex p-2 w-28 hover:bg-slate-800 rounded-xl items-center",
  icon: "ml-auto",
  label: "mr-2"
}

const MenuItem = (props) => {
  return <Link className={classNames.link} to={`/chat${props.to}`}>
    <p className={classNames.label}>
      {
        props.label
      }
    </p>
    <div className={classNames.icon}>
      {
        React.createElement(props.icon)
      }
    </div>
  </Link>
}

export default MenuItem
