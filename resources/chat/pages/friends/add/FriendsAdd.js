import React from "react";
import Head from "../../../components/head/Head";
import CurrentFriends from "../CurrentFriends";
import UsersList from "./UsersList";

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
        <UsersList/>
      </div>
    </div>
  </div>
}

export default Friends
