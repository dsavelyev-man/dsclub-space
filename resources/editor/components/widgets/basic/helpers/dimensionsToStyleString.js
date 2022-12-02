const dimensionsToStyleString = (dimensions) => {
  if(!dimensions) return;

  const bottom = dimensions.bottom || 0;
  const top = dimensions.top || 0;
  const left = dimensions.left || 0;
  const right = dimensions.right || 0;
  const unit = dimensions.unit || "px";

  if(!dimensions.bottom && !dimensions.left && !dimensions.right && !dimensions.top) return;

  return `${top}${unit} ${left}${unit} ${bottom}${unit} ${right}${unit}`
}

export default dimensionsToStyleString
