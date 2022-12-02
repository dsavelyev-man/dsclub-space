import React from "react";
import classname from "classname"
import DoneIcon from '@mui/icons-material/Done';

const classNames = {
  container: "h-40 w-40 m-2 flex justify-center relative items-center rounded-xl cursor-pointer",
  image: "max-h-40 rounded shadow",
  isActiveTag: "absolute right-0 top-0 p-1 bg-sky-500 text-slate-100 rounded-full",
  content: (active) => classname("duration-200 ease-out", active && "scale-90")
}

const MediaFile = (props) => {
  let content = ""
  const path = React.useMemo(() => "/assets" + props.media.path, [])

  switch (props.media.extension) {
    case "png":
    case "jpg":
      content = <img className={classNames.image} src={path} alt={props.name}/>
  }

  const onClick = () => {
    props.onAttach(props.media)
  }

  return <div onClick={onClick} className={classNames.container}>
    <div className={classNames.content(props.isActive)}>
      {
        content
      }
    </div>
    {
      props.isActive && <div className={classNames.isActiveTag}><DoneIcon/></div>
    }
  </div>
}

export default MediaFile
