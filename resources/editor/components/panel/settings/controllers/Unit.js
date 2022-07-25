import React from "react";
import join from "lodash/join";

const classNames = {
  container: "flex",
  unit: (active) =>
    join(
      [
        "cursor-pointer ds-controller__unit mr-1 last:mr-0",
        active ? "text-slate-100" : "text-slate-400",
      ],
      " "
    ),
};

const Unit = (props) => {
  const container = React.createRef();

  const change = (e, unit) => {
    const elements = container.current.getElementsByClassName("ds-controller__unit");

    for (const elem of elements) {
      elem.classList.remove("text-slate-100");
      elem.classList.add("text-slate-400");
    }

    e.currentTarget.classList.add("text-slate-100");
    e.currentTarget.classList.remove("text-slate-400");

    props.change(unit);
  };

  return (
    <div className={classNames.container} ref={container}>
      {props.units.map((unit) => (
        <div
          onClick={(e) => change(e, unit)}
          className={classNames.unit(unit === props.value)}
          key={unit}
        >
          {unit}
        </div>
      ))}
    </div>
  );
};

export default Unit;
