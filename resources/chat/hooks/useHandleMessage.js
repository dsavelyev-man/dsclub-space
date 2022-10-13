import React from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../store/reducers/chats/chatsReducer";

const useHandleMessage = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    if(!window.listeners.message) {
      window.ws.io.on("message", (data) => {
        dispatch(addMessage(data))
      })
      window.listeners.message = true
    }
  }, [])
}

export default useHandleMessage
