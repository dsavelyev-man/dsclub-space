import React from "react";
import debounce from "lodash/debounce"

const classNames = {
  wrapper: "px-4 py-2",
  field: "mb-2 rounded-full p-2 drop-shadow-xl outline-none w-full bg-slate-700 text-white placeholder:text-slate-400"
}

const Search = (props) => {

  const debounceFunction =  debounce((e) => {
    console.log(e.target.value)
    props.onUpdate(e.target.value)
  }, 1000)

  const onChange = (e) => {

    debounceFunction(e)
  }

  return <div className={classNames.wrapper}>
    <input placeholder="Find By Username" onChange={onChange} className={classNames.field}/>
  </div>
}

export default Search
