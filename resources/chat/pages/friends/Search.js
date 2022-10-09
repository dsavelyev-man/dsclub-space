import React from "react";
import debounce from "lodash/debounce"
import LinkFriends from "./LinkFriends";
import LinkRequests from "./LinkRequests";

const classNames = {
  wrapper: "px-4 py-2 flex mb-2",
  field: "rounded-full p-2 outline-none w-full bg-slate-700 text-white placeholder:text-slate-400"
}

const Search = (props) => {

  const debounceFunction =  debounce((e) => {
    props.onUpdate(e.target.value)
  }, 1000)

  const onChange = (e) => {

    debounceFunction(e)
  }

  return <div className={classNames.wrapper}>
    <input placeholder="Find By Username" onChange={onChange} className={classNames.field}/>
    <LinkFriends isAdd={props.isAdd}/>
    <LinkRequests isRequests={props.isRequests}/>
  </div>
}

export default Search
