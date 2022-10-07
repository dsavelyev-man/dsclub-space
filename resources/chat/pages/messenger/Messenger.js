import React from "react";
import Head from "../../components/head/Head";
import "../../scss/pages/home.scss"
import Chats from "./chats/Chats";
import Messages from "./messages/Messages";
import useGuestRedirect from "../../hooks/useGuestRedirect";
import "../../scss/pages/messenger.scss"
import { useParams } from "react-router-dom";
import axios from "axios";
import useHandleMessage from "../../hooks/useHandleMessage";
import { useSelector } from "react-redux";

const classNames = {
  content: "home__content flex",
  wrapper: "home"
}

const Messenger = () => {
  useGuestRedirect(true, "/preview")

  const [chats, setChats] = React.useState([])
  const user = useSelector(s => s.user)
  const [textareaHeight, setTextareaHeight] = React.useState(62)
  const params = useParams()
  const currentChatId = parseInt(params.id)

  React.useEffect(() => {
    const getFriends = async () => {
      try {
        const r = await axios.get("/ajax/chats")

        setChats(r.data)
      } catch {}
    }

    getFriends()
  }, [])

  React.useEffect(() => {
    window.currentChatId = currentChatId
  }, [currentChatId])

  useHandleMessage()

  const helpers = {
    chats,
    user: user,
    currentChatId,
    chat: chats.find((chat) => chat.chat.id === currentChatId),
    setTextareaHeight,
    textareaHeight
  }

  return <div className={classNames.wrapper}>
    <Head/>
    <div className={classNames.content}>
      <Chats {...helpers}/>
      {
        currentChatId ? (chats.length > 0 && <Messages {...helpers}/>) : "hello world"
      }
    </div>
  </div>
}

export default Messenger
