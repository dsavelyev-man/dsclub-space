import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateFiles } from "../../../../store/reducers/files/filesReducer";
import MediaFile from "./MediaFile";
import Pagination from "./Pagination";
import PaginationCap from "./PaginationCap";

const classNames = {
  container: "flex flex-wrap chat-messages-files pb-2 overflow-hidden"
}

const Files = (props) => {
  const files = useSelector((s) => s.files.data)
  const [meta, setMeta] = React.useState({
    current_page: 1
  })

  const dispatch = useDispatch()

  const getFiles = async (page) => {
    try {
      const r = await axios.get("/ajax/media", {
        params: {
          page
        }
      })

      dispatch(updateFiles(r.data.data))
      setMeta(r.data.meta)
    } catch (e) {
      console.log(e)
    }
  }

  React.useEffect(() => {
      getFiles(1)
  }, [])

  console.log(files)

  return <div className={classNames.container}>
    {
      files.map((file) => <MediaFile
        isActive={props.files.findIndex((f) => f.id === file.id) !== -1}
        onAttach={props.onAttach}
        media={file}
        key={file.id}
      />)
    }
    {
      meta.total ? <Pagination getFiles={getFiles} meta={meta}/> : <PaginationCap/>
    }
  </div>
}

export default Files
