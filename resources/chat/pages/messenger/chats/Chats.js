import React from "react";
import axios from "axios";
import ChatItem from "./ChatItem";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const classNames = {
  wrapper: "w-2/4 bg-slate-800 drop-shadow-xl rounded-xl h-full p-2"
}

const Chats = (props) => {
  const user = useSelector(s => s.user)

  return <div className={classNames.wrapper}>
    {
      props.chats.map(chatMember => <ChatItem user={user} currentChatId={props.currentChatId} key={chatMember.id} chatMember={chatMember}/>)
    }
  </div>
}

export default Chats
