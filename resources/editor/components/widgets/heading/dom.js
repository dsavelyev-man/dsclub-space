import constants from "../basic/constants";

const dom = (widget) => {
  const heading = [
    "{{content.settings.tag}}",
    {
      props: {
        id: constants.idPrefix + widget.guid,
        class: "ds-heading",
      },
      children: ["{{content.text.value}}"],
    },
  ];

  let content = [heading];

  const link = widget.getValue("content.settings.link");
  if (link) {
    content = [
      [
        "a",
        {
          props: {
            href: link,
          },
          children: [heading],
        },
      ],
    ];
  }

  return content;
};

export default dom;
