import React from "react";
import ChatIcon from '@mui/icons-material/Chat';
import useIsGuest from "../../hooks/useIsGuest";
import Auth from "./Auth";
import Menu from "./Menu";

const classNames = {
  container: "flex justify-between text-slate-100 items-center",
  brand: "flex items-center h-12 bg-slate-900 rounded-xl m-1 p-2",
  brandText: "mr-2",
}

const Head = () => {
  const isGuest = useIsGuest()

  return <div className={classNames.container}>
    <h2 className={classNames.brand}><span className={classNames.brandText}>Chat</span> <ChatIcon/></h2>
    {
      isGuest ? <Auth/> : <Menu/>
    }
  </div>
}

export default Head
