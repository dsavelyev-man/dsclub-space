import React from "react";

const classNames = {
  container: "w-full flex p-2",
  message: "ml-auto bg-slate-700 p-2 rounded-xl rounded-br-none text-slate-200"
}

const YMessage = (props) => {
  const ref = React.useRef()

  return <div id={`chatMessage_${props.message.id}`} className={classNames.container} ref={ref}>
    <div className={classNames.message}>
      {
        props.message.text
      }
    </div>
  </div>
}

export default YMessage
