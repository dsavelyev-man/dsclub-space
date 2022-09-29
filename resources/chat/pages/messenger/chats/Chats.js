import React from "react";
import axios from "axios";
import ChatItem from "./ChatItem";

const classNames = {
  wrapper: "w-2/4 bg-slate-800 drop-shadow-xl rounded-xl h-full p-2"
}

const Chats = () => {
  const [chats, setChats] = React.useState([])

  React.useEffect(() => {
    const getFriends = async () => {
      try {
        const r = await axios.get("/ajax/chats")

        setChats(r.data)
      } catch {}
    }

    getFriends()
  }, [])

  return <div className={classNames.wrapper}>
    {
      chats.map(chatMember => <ChatItem key={chatMember.id} chatMember={chatMember}/>)
    }
  </div>
}

export default Chats
