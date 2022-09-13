import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const classNames = {
  button: "h-8 rounded-xl drop-shadow-xl bg-slate-900 border m-1 px-2 first:mr-2"
}

const Auth = () => {
  return  <div>
    <Link to="/chat/login">
      <button className={classNames.button}><LoginIcon/> Sign in</button>
    </Link>
    <Link to="/chat/registration">
      <button className={classNames.button}><HowToRegIcon/> Sign up</button>
    </Link>
  </div>
}

export default Auth
