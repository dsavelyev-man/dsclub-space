import React from "react";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from "react-router-dom";
import PeopleIcon from '@mui/icons-material/People';

const classNames = {
  container: "text-slate-300 flex justify-center items-center rounded-full cursor-pointer bg-slate-700 active:bg-slate-600 hover:bg-slate-600 w-14 ml-2"
}

const LinkFriends = (props) => {

  return (
    props.isAdd ?
      <Link to="/chat/friends" className={classNames.container}>
        <PeopleIcon/>
      </Link>
      :
      <Link to="/chat/friends/add" className={classNames.container}>
       <PersonAddIcon/>
      </Link>
  )
}

export default LinkFriends
