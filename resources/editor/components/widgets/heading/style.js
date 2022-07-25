const style = () => {
  return [
    "&",
    ["", "justify-content", "content.settings.alignment"],
    ["", "color", "style.font.color"],
    "}",
  ];
};

export default style;

export const defaultStyle = `
    .ds-heading {
      display: flex;
      margin: 0;
      font-size: 32px;
      padding: 0;
      font-family: Tahoma, sans-serif;
      font-weight: 600;
    }

    .ds-heading__link {
      text-decoration: none;
      color: #000;
    }
`;
