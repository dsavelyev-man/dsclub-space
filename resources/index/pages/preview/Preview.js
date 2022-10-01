import React from "react";
import "../../scss/pages/preview.scss";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ChatIcon from '@mui/icons-material/Chat';
import DLink from "./DLink";

const classNames = {
  wrapper: "preview",
  content: "flex p-2 bg-slate-200 rounded"
}

const Preview = () => {
  return <div className={classNames.wrapper}>
    <div className={classNames.content}>
      <DLink href="/chat"><ChatIcon/></DLink>
      <DLink href="/editor"><BorderColorIcon/></DLink>
      <DLink href="/pizza"><LocalPizzaIcon/></DLink>
    </div>
  </div>;
};

export default Preview;
