import constants from "../basic/constants";

const dom = (widget) => {
  return [
    [
      "div",
      {
        props: {
          class: "ds-container",
          id: constants.idPrefix + widget.guid,
        },
        children: widget.children,
      },
    ],
  ];
};

export default dom;
