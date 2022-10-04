import React from "react";
import axios from "axios";
import ChatItem from "./ChatItem";
import { useParams } from "react-router-dom";

const classNames = {
  wrapper: "w-2/4 bg-slate-800 drop-shadow-xl rounded-xl h-full p-2"
}

const Chats = (props) => {

  return <div className={classNames.wrapper}>
    {
      props.chats.map(chatMember => <ChatItem currentChatId={props.currentChatId} key={chatMember.id} chatMember={chatMember}/>)
    }
  </div>
}

export default Chats
