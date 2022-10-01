import React from "react";
import { Link } from "react-router-dom";
import classname from "classname"

const classNames = {
  container: "flex items-center hover:bg-slate-600 p-2 rounded-full w-full text-slate-100",
  preview: "h-14 w-14 bg-indigo-100 mr-2 rounded-full bg-center bg-cover border",
  title: "a",
  lastMessage: "text-xs text-left text-slate-400",
  body: ""
}

const ChatItem = (props) => {
  const chat = props.chatMember.chat;

  return <Link to={`/chat/messenger/${chat.path}`}>
    <button className={classname(classNames.container, props.currentChatId === chat.path ? "bg-slate-700" : "")}>
      <div className={classNames.preview} style={{
        backgroundImage: `url(${chat.preview_path.startsWith("http") ? chat.preview_path : "/assets" + chat.preview_path})`
      }}/>
      <div className={classNames.body}>
        <p className={classNames.title}>
          {
            chat.title
          }
        </p>
        <p className={classNames.lastMessage}>
          {props.chatMember.last_message}
        </p>
      </div>
    </button>
  </Link>
}

export default ChatItem
