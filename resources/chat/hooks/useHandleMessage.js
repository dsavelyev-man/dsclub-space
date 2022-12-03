import React from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../store/reducers/chats/chatsReducer";

const useHandleMessage = (userId) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    if(!window.listeners.message) {
      window.ws.io.on("message", (data) => {
        dispatch(addMessage(data))

        if(data.message.user_id !== userId) {
          const sound = document.createElement("audio")

          sound.src = "/sounds/telegram.mp3";

          sound.play()
        }
      })
      window.listeners.message = true
    }
  }, [])
}

export default useHandleMessage
