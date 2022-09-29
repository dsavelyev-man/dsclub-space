import React from "react";
import Head from "../../components/head/Head";
import "../../scss/pages/friends.scss";
import Search from "./Search";
import CurrentFriends from "./CurrentFriends";

const classNames = {
  wrapper: "friends",
  content: "friends__content",
  background: "bg-slate-800 h-full w-full rounded-xl drop-shadow-xl"
}

const Friends = () => {

  return <div className={classNames.wrapper}>
    <Head/>
    <div className={classNames.content}>
      <div className={classNames.background}>
        <CurrentFriends/>
      </div>
    </div>
  </div>
}

export default Friends
