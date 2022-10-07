import React from "react";
import { Link } from "react-router-dom";
import classname from "classname"

const classNames = {
  container: "flex items-center hover:bg-slate-600 p-2 rounded-full w-full text-slate-100",
  preview: "h-14 w-14 bg-indigo-100 mr-2 rounded-full bg-center bg-cover border",
  title: "text-left",
  lastMessage: "text-xs text-left text-slate-400",
  body: "",
  lastMessageYou: "text-slate-500"
}

const ChatItem = (props) => {
  const chat = props.chatMember.chat;
  let lastMessage = props.chatMember.last_message
  let lastText = lastMessage?.text || "";

  if(lastText.length > 16) {
    lastText = lastText.slice(0, 16).trim() + "..."
  }

  return <Link to={`/chat/messenger/${chat.id}`}>
    <button className={classname(classNames.container, props.currentChatId === chat.id ? "bg-slate-700" : "")}>
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
          {
            lastMessage.user_id === props.user.data.id && <span className={classNames.lastMessageYou}>You: </span>
          }
          {lastText}
        </p>
      </div>
    </button>
  </Link>
}

export default ChatItem
