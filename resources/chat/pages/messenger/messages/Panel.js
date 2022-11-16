import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AttachFilePopup from "./attachFilePopup/AttachFilePopup";

const classNames = {
  container: "w-full p-2 flex",
  input: "w-full h-8 overflow-hidden rounded-xl resize-none bg-slate-900 p-2 mb-2 drop-shadow-xl bg-slate-900 outline-none text-white placeholder:text-slate-400",
  sendButton: "ml-1 min-w-full w-10 h-8 flex p-2 justify-center items-center text-slate-400 bg-slate-900 rounded-full text-xs",
  attachButton: "ml-1 min-w-full w-10 h-8 flex p-2 justify-center items-center text-slate-400 bg-slate-900 rounded-full text-xs"
}

const Panel = (props) => {
  const [text, setText] = React.useState("")
  const [showAttachFile, setShowAttachFile] = React.useState(false)

  const onHeightChange = (height) => {
    props.setTextareaHeight(height)
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault()
      if(text) {
        window.ws.io.emit("message", {
          chat: props.currentChatId,
          extra: null,
          text
        })
        setText("")
      }
    }
  }

  const onSend = () => {
    if(text) {
      window.ws.io.emit("message", {
        chat: props.currentChatId,
        extra: null,
        text
      })
      setText("")
    }
  }

  const openAttachFile = () => {
    setShowAttachFile(true)
  }

  return <div className={classNames.container}>
    <TextareaAutosize onKeyPress={onKeyPress} value={text} onChange={onChange} placeholder="Write Here" onHeightChange={onHeightChange} className={classNames.input}/>
    <button onClick={onSend} className={classNames.sendButton}><SendIcon/></button>
    <button onClick={openAttachFile} className={classNames.attachButton}><AttachFileIcon/></button>
    {
      showAttachFile && <AttachFilePopup setShow={setShowAttachFile}/>
    }
  </div>
}

export default Panel
