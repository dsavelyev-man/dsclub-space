import React from "react";

const classNames = {
  container: "w-full flex p-2",
  message: "bg-slate-900 p-2 rounded-xl rounded-tl-none text-slate-200"

}

const GMessage = (props) => {
  const ref = React.useRef()

  React.useEffect(() => {
    // console.log(ref.current.scrollTop)
  }, [])


  return <div id={`chatMessage_${props.message.id}`} className={classNames.container} ref={ref}>
    <div className={classNames.message}>
      {
        props.message.text
      }
    </div>
  </div>
}

export default GMessage
