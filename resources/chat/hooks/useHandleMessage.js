import React from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../store/reducers/chats/chatsReducer";

const useHandleMessage = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    window.ws.io.on("message", (data) => {
      dispatch(addMessage(data))
    })
  }, [])
}

export default useHandleMessage
