import React from "react";
import "../../scss/pages/preview.scss";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Preview = () => {
  return <div className="preview">
    <a href="/editor"><BorderColorIcon/></a>
    <a href="/pizza"><LocalPizzaIcon/></a>
  </div>;
};

export default Preview;
