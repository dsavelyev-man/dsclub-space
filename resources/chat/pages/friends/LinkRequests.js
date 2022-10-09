import React from "react";
import { Link } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from "@mui/icons-material/People";

const classNames = {
  container: "text-slate-300 flex justify-center items-center rounded-full cursor-pointer bg-slate-700 active:bg-slate-600 hover:bg-slate-600 w-14 ml-2"
}

const LinkRequests = (props) => {

  return (
    props.isRequests ?
      <Link to="/chat/friends" className={classNames.container}>
        <PeopleIcon/>
      </Link>
      :
      <Link to="/chat/friends/requests" className={classNames.container}>
        <NotificationsIcon/>
      </Link>
  )
}

export default LinkRequests
