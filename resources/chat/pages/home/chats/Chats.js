import React from "react";
import axios from "axios";

const classNames = {
  wrapper: "w-2/5 bg-slate-800 drop-shadow-xl rounded-xl h-full"
}

const Chats = () => {

  React.useEffect(() => {
    const getFriends = async () => {
      const r = axios.get("/ajax/friends")

    }

    getFriends()
  }, [])

  return <div className={classNames.wrapper}>

  </div>
}

export default Chats
