import React from "react";
import MediaFile from "./MediaFile";

const Files = (props) => {
  console.log(props.files)

  return props.files && <div>
    {
      props.files.map(file => <MediaFile key={file.id} media={file}/>)
    }
  </div>
}

export default React.memo(Files)
