import React from "react";
import classname from "classname"

const Input = (props) => {
  return <input
    {...props}
    className={classname("mb-2 rounded-xl p-2 drop-shadow-xl bg-slate-700 border text-white placeholder:text-slate-400", props.className)}
  />
}

export default Input
