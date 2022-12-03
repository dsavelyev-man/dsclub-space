import React from "react";
import classname from "classname"

const classNames = {
  container: "flex justify-center items-center text-slate-100 w-full",
  pagination: "flex",
  item: (active) => classname("mr-2 last:mr-0 w-10 rounded h-10 hover:bg-slate-900 transition", active && " bg-slate-900 shadow-lg shadow-cyan-500/50")
}

const Pagination = (props) => {
  console.log(props.meta)
  const pagesIndex = React.useMemo(() => {
    const pagesIndex = [];

    for(let i = 1; i < props.meta.last_page; i++) {
      pagesIndex.push(i)
    }

    return pagesIndex
  }, [props.meta])

  const onClick = (page) => {
    console.log(page, props)
    props.getFiles(page)
  }

  return <div className={classNames.container}>
    <div className={classNames.pagination}>
      {
        pagesIndex.map(index => <button
          onClick={() => onClick(index)}
          className={classNames.item(props.meta.current_page === index)}
          key={index}>
          { index }
        </button>)
      }
    </div>
  </div>
}

export default Pagination
