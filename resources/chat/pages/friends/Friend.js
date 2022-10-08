import React from "react"
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom";

const classNames = {
  container: "text-slate-100 p-2 mb-2 flex justify-between rounded-full bg-slate-700 drop-shadow-xl",
  avatar: "h-14 w-14 bg-indigo-100 mr-2 rounded-full bg-center bg-cover border",
  info: "flex items-center",
  actions: "flex items-center",
  actionSendMessage: "bg-slate-800 rounded-full mr-2 p-2 flex justify-center items-center h-14 w-14 cursor-pointer hover:bg-slate-900 active:bg-slate-900",
  actionMoreVariants: "bg-slate-800 rounded-full p-2 flex justify-center items-center h-14 w-14 cursor-pointer hover:bg-slate-900 active:bg-slate-900"
}

const Friend = (props) => {
  const contentRef = React.useRef()

  React.useEffect(() => {
    if(props.isLast) {

      const options = {
        root: null,
        rootMargin: "20px",
        threshold: 1.0
      };

      window.lastFriendObserver = new IntersectionObserver(props.handleObserver, options)

      window.lastFriendObserver.observe(contentRef.current)
    }
  }, [])

  return <div ref={contentRef} className={classNames.container}>
    <div className={classNames.info}>
      <div className={classNames.avatar} style={{
        backgroundImage: `url(${props.friend.avatar_path.startsWith("http") ? props.friend.avatar_path : "/assets" + props.friend.avatar_path})`
      }}>
      </div>
      <p>
        {
          props.friend.username
        }
      </p>
    </div>
    <div className={classNames.actions}>
      <Link to={`/chat/messenger/${props.friend.id}`}>
        <button className={classNames.actionSendMessage}>
          <SendIcon/>
        </button>
      </Link>
      <button className={classNames.actionMoreVariants}>
        <MoreVertIcon/>
      </button>
    </div>
  </div>
}

export default Friend
