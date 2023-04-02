import React from "react";
import Files from "./Files";

const classNames = {
  container: "w-full flex p-2 flex-col items-end",
  message: "ml-auto chat-message bg-slate-700 p-2 rounded-xl rounded-br-none text-slate-200"
}

const YMessage = (props) => {
  const ref = React.useRef()

  React.useEffect(() => {
    // console.log(ref.current.scrollTop)
    if(!props.message.read && props.message.user_id !== props.user.data.id) {
      window.ws.io.emit("read", {
        chat: props.currentChatId,
        message: props.message.id
      })
    }

    if(props.isLastMessage && window.scrollbar.current?.scrollValues.scrollTop > window.chatScrollsMaxTopPosition[window.currentChatId] - 120) {
      window.scrollbar.current?.scrollToBottom()
    }
  }, [])

  return <div id={`chatMessage_${props.message.id}`} className={classNames.container} ref={ref}>
    <div className={classNames.message} dangerouslySetInnerHTML={{ __html: props.message.text }}/>
    <Files files={props.message.extra?.files}/>
  </div>
}

export default YMessage