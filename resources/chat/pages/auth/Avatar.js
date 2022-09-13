import React from "react";
import { useDropzone } from "react-dropzone";
import ImageIcon from '@mui/icons-material/Image';

const classNames = {
  container: "h-40 w-40 rounded-full border bg-cover cursor-pointer flex bg-center justify-center items-center bg-slate-800 mb-4 drop-shadow-xl",
  canDrop: "text-slate-600 auth__avatar"
}

const Avatar = (props) => {
  const url = React.useMemo(() => props.form.avatar && URL.createObjectURL(props.form.avatar), [props.form.avatar])

  const onDrop = React.useCallback(acceptedFiles => {
    props.setForm((s) => ({
      ...s,
      avatar: acceptedFiles[0]
    }))
  })

  console.log(props.form.preview)

  const {getRootProps, getInputProps} = useDropzone({ onDrop })

  return <div
    className={classNames.container}
    style={{
      backgroundImage: `url(${url})`
    }}
    {...getRootProps()}
  >
    <input {...getInputProps()}/>
    <div className={classNames.canDrop}>
      {
        !props.form.avatar && <ImageIcon className="h-20 w-20"/>
      }
    </div>
  </div>
}

export default React.memo(Avatar)
