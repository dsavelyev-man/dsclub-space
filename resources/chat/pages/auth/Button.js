import React from "react";
import classname from "classname";

const Button = (props) => {
  return <button className={classname("h-8 rounded-xl w-full drop-shadow-xl bg-slate-900 border m-1 px-2 text-white", props.className)}>
    {
      props.children
    }
  </button>
}

export default Button
