import React from "react"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Link } from "react-router-dom";
import axios from "axios";

const classNames = {
  container: "text-slate-100 p-2 mb-2 flex justify-between rounded-full bg-slate-700 drop-shadow-xl",
  avatar: "h-14 w-14 bg-indigo-100 mr-2 rounded-full bg-center bg-cover border",
  info: "flex items-center",
  actions: "flex items-center",
  actionAdd: "bg-slate-800 rounded-full p-2 flex justify-center items-center h-14 w-14 cursor-pointer hover:bg-slate-900 active:bg-slate-900",
}

const User = (props) => {
  const contentRef = React.useRef()

  React.useEffect(() => {
    if(props.isLast) {

      const options = {
        root: null,
        rootMargin: "20px",
        threshold: 1.0
      };

      window.lastUserObserver = new IntersectionObserver(props.handleObserver, options)

      window.lastUserObserver.observe(contentRef.current)
    }
  }, [])

  const add = async () => {
    const r = await axios.post("/ajax/friends/add", {
      user_id: props.user.id
    })
  }

  return <div ref={contentRef} className={classNames.container}>
    <div className={classNames.info}>
      <div className={classNames.avatar} style={{
        backgroundImage: `url(${props.user.avatar_path.startsWith("http") ? props.user.avatar_path : "/assets" + props.user.avatar_path})`
      }}>
      </div>
      <p>
        {
          props.user.username
        }
      </p>
    </div>
    <div className={classNames.actions}>
      <button onClick={add} className={classNames.actionAdd}>
        <PersonAddAlt1Icon/>
      </button>
    </div>
  </div>
}

export default User
