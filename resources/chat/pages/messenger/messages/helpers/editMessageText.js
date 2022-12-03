import DOMPurify from "dompurify"

const editMessageText = (text) => {
  const purify = new DOMPurify();

  return purify.sanitize(text.replace(/(\n)\1+/g,"\n").replace(/[\n\r]/g,"<br>").trim())
}

export default editMessageText
