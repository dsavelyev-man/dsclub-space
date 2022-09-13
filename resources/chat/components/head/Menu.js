import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useSelector } from "react-redux";

const classNames = {
  button: "h-10 w-10 bg-indigo-100 mr-2 rounded-full bg-center bg-cover border"
}

const Menu = () => {
  const avatarPath = useSelector((s) => s.user.data.avatar_path)

  console.log(avatarPath)

  return  <>
    <button className={classNames.button} style={{
      backgroundImage: `url(/assets${avatarPath})`
    }}/>
  </>
}

export default Menu
