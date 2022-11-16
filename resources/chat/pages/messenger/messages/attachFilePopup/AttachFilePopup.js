import React from "react";
import { createPortal } from "react-dom";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Files from "./Files";
import { useDispatch } from "react-redux";
import { unshiftFile } from "../../../../store/reducers/files/filesReducer";

const classNames = {
  container: "absolute left-0 flex justify-center items-center top-0 w-screen h-screen z-50",
  background: "absolute left-0 top-0 w-screen h-screen z-30 backdrop-blur",
  content: "min-w-content chat-messages-attach__content bg-slate-800 z-40 shadow-xl",
  dropHere: "h-64 w-full border text-slate-400 m-2 chat-messages-attach__dropzone flex justify-center items-center rounded border-slate-600",
  savedFiles: ""
}

const AttachFilePopup = (props) => {
  const dispatch = useDispatch()

  const onDrop = React.useCallback((acceptedFiles) => {
    console.log(acceptedFiles)
    const form = new FormData()

    form.append("file", acceptedFiles[0])

    const sendFile = async () => {
      try {
        const r = await axios.post("/ajax/media", form, {

        })

        dispatch(unshiftFile(r.data))
      } catch(e) {
        console.log(e)
      }
    }

    sendFile()
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({ onDrop })

  const onClickBackground = () => {
    props.setShow(false)
  }

  const content = <div className={classNames.container}>
    <div className={classNames.content}>
      <div {...getRootProps()} className={classNames.dropHere}>
        <p>Drop Here</p>
        <input {...getInputProps()}/>
      </div>
      <Files/>
    </div>
    <div onClick={onClickBackground} className={classNames.background}/>
  </div>

  return createPortal(content, document.body)
}

export default AttachFilePopup
