import React from "react";
import Head from "../../components/head/Head";
import "../../scss/pages/home.scss"
import Chat from "./chats/Chats";
import Messages from "./messages/Messages";
import useGuestRedirect from "../../hooks/useGuestRedirect";

const classNames = {
  content: "home__content flex",
  wrapper: "home"
}

const Home = () => {

  useGuestRedirect(true, "/preview")

  return <div className={classNames.wrapper}>
    <Head/>
    <div className={classNames.content}>
      <Chat/>
      <Messages/>
    </div>
  </div>
}

export default Home
