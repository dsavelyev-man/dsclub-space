import React from "react";

const classNames = {
    link: "p-2 bg-slate-300 hover:bg-slate-400 hover:text-slate-100 mr-2 last:mr-0 flex justify-center items-center rounded-xl"
}

const DLink = (props) => {
    return <a className={classNames.link} href={props.href}>
        {
            props.children
        }
    </a>
}

export default DLink