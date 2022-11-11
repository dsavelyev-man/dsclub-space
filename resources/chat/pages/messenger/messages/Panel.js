import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const classNames = {
  container: "w-full p-2",
  input: "w-full h-8 overflow-hidden rounded-xl resize-none bg-slate-900 p-2 mb-2 drop-shadow-xl bg-slate-900 outline-none text-white placeholder:text-slate-400"
}

const Panel = (props) => {
  const [text, setText] = React.useState("")

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

  return <div className={classNames.container}>
    <TextareaAutosize onKeyPress={onKeyPress} value={text} onChange={onChange} placeholder="Write Here" onHeightChange={onHeightChange} className={classNames.input}/>
  </div>
}

export default Panel
