import React from "react";
import "../../scss/pages/preview.scss"
import Head from "../../components/head/Head";
import useGuestRedirect from "../../hooks/useGuestRedirect";

const Preview = () => {

  useGuestRedirect(false, "/messenger")

  return <div className="preview">
    <Head/>
  </div>;
};

export default Preview;
