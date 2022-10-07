import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addChat, addMessages } from "../../../store/reducers/chats/chatsReducer";
import GMessage from "./GMessage";
import YMessage from "./YMessage";

const classNames = {
  container: "messages-content"
}

const Content = (props) => {
  const dispatch = useDispatch()
  const chats = useSelector((s) => s.chats.chats)
  const scrollbarRef = React.useRef()
  const [loading, setLoading] = React.useState(false)
  const [finished, setFinished] = React.useState(false)

  const chat = chats[props.currentChatId] || {};
  const messages = chat.messages || [];

  React.useEffect(() => {
    window.scrollbar = scrollbarRef;
  }, [scrollbarRef])

  const getMessages = async (page=1, getChat=false) => {
    try {
      if(!finished || getChat) {
        setLoading(true)
        const r = await axios.get("/ajax/messages", {
          params: {
            page,
            chat: props.currentChatId
          }
        })

        if(r.data.length === 0) {
          setFinished(true)
        }

        if(!chat.messages) {
          dispatch(addChat({
            ...props.chat.chat,
            messages: r.data,
            nextPage: page+1
          }))
        } else {
          dispatch(addMessages({
            messages: r.data,
            chat: chat.id
          }))
        }

        setLoading(false)
      }
    } catch {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    window.chatScrollsTopPosition = {}
    window.chatScrollsMaxTopPosition = {}
  }, [])

  React.useEffect(() => {
    setFinished(false)

    if(!chats[props.currentChatId]) {
      getMessages(1, true).then(() => {
        scrollbarRef.current.scrollToBottom()
      })
    }

    scrollbarRef.current.scrollTo(0, window.chatScrollsTopPosition[chat.id])
  }, [props.currentChatId])

  const onScroll = (scrollValues) => {
    const message = messages[0]

    if(message) {
      window.chatScrollsTopPosition[chat.id] = scrollValues.scrollTop

      if((window.chatScrollsMaxTopPosition[chat.id] || 0) < scrollValues.scrollTop) {
        window.chatScrollsMaxTopPosition[chat.id] = scrollValues.scrollTop
      }

      const messageEl = document.getElementById(`chatMessage_${message.id}`)
      const rect = messageEl.getBoundingClientRect();

      if(rect.y > -100 && !loading) {
        getMessages(chat.nextPage)
      }
    }
  }

  return <Scrollbar
    style={{
      width: "100%",
      height: `calc(100% - ${props.textareaHeight + 20}px)`,
    }}
    contentProps={{
      renderer: (props) => {
        const { elementRef, ...restProps } = props;
        return <span {...restProps} ref={elementRef} className="flex justify-end flex-col" />;
      },
    }}
    ref={scrollbarRef}
    onScroll={onScroll}
  >
    {
      messages.map((message, index) => {
        const isLastMessage = messages.length -1 === index;

        const data = {
          message,
          isLastMessage,
          user: props.user,
          currentChatId: props.currentChatId,
          key: message.id
        }

        return message.user_id === chat.path ? <GMessage {...data}/> : <YMessage {...data}/>
      })
    }
  </Scrollbar>
}

export default Content
