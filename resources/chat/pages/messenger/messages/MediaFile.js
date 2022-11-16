import React from "react";

const classNames = {
  container: "h-40 w-40 m-2 flex justify-center items-center",
  image: "max-h-40"
}

const MediaFile = (props) => {
  let content = ""
  const path = React.useMemo(() => "/assets" + props.media.path, [])

  switch (props.media.extension) {
    case "png":
    case "jpg":
      content = <img className={classNames.image} src={path} alt={props.name}/>
  }

  return <div className={classNames.container}>
    {
      content
    }
  </div>
}

export default MediaFile
