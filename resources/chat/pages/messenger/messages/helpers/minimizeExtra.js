const minimizeExtra = extra => {
  console.log("ASdasas", extra)
  if(!extra) return

  const minimized = {}

  if(extra.files) {
    minimized.files = extra.files.map((file) => file.id)
  }

  return minimized
}

export default minimizeExtra
