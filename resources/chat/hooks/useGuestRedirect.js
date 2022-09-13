import React from "react";
import { useSelector } from "react-redux";

const useGuestRedirect = (value, to) => {
  const isGuest = useSelector((s) => s.user.isGuest)

  if(isGuest === value) {
    window.location.replace("/chat" + to)
  }
}

export default useGuestRedirect
