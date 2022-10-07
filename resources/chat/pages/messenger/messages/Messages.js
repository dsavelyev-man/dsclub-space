import React from "react";
import Content from "./Content";
import Panel from "./Panel";

const classNames = {
  wrapper: "w-full bg-slate-800 drop-shadow-xl ml-2 rounded-xl h-full"
}

const Messages = (props) => {

  return <div className={classNames.wrapper}>
    <Content {...props}/>
    <Panel {...props}/>
  </div>
}

export default Messages
