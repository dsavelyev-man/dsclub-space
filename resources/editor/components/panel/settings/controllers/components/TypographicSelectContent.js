import React from "react";
import { createPortal } from "react-dom";
import { fonts } from "../../../../constants/fonts";
import { Scrollbar } from "react-scrollbars-custom";
import { useSelector } from "react-redux";

const classNames = {
  content: "z-50 absolute w-52 h-60 overflow-hidden rounded left-0 top-0 bg-slate-700 p-2 shadow hidden",
  li: "text-slate-100 px-1 py-1 hover:bg-slate-900 cursor-pointer rounded truncate",
  ul: "",
}

const TypographicSelectContent = () => {
  const ref = React.useRef();
  const typography = useSelector(s => s.typography);

  React.useEffect(() => {
    window.ds.typographicContentRef = ref
  }, [])

  return createPortal(<div ref={ref} className={classNames.content}>
    <Scrollbar
      style={{
        width: "12rem"
      }}
      contentProps={{
        renderer: (props) => {
          const { elementRef, ...restProps } = props;
          return <span {...restProps} ref={elementRef} className="flex justify-end flex-col" />;
        },
      }}
    >
      <ul className={classNames.ul}>
        {
          Object.keys(fonts).map((font) => <li
            onClick={() => window.ds.typographicOnSelect && window.ds.typographicOnSelect(font)}
            className={classNames.li} key={font} title={font}
          >{font}</li>)
        }
      </ul>
    </Scrollbar>
  </div>, document.body)
}

export default TypographicSelectContent
