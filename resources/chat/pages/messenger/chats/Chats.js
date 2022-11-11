import React from "react";
import axios from "axios";
import ChatItem from "./ChatItem";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Scrollbar } from "react-scrollbars-custom";

const classNames = {
  wrapper: "home__chats bg-slate-800 drop-shadow-xl rounded-xl h-full p-2"
}

const Chats = (props) => {
  const user = useSelector(s => s.user)

  return  <div className={classNames.wrapper}>
    <Scrollbar
      style={{
        width: "100%",
        height: `100%`,
      }}>
      {
        props.chats.map(chatMember => <ChatItem user={user} currentChatId={props.currentChatId} key={chatMember.id} chatMember={chatMember}/>)
      }
    </Scrollbar>
  </div>
}

export default Chats
