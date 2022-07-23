import constants from "../basic/constants";

const dom = (widget) => {
  return [
    [
      "div",
      {
        props: {
          class: "ds-column",
          id: constants.idPrefix + widget.guid,
        },
        children: widget.children,
      },
    ],
  ];
};

export default dom;
