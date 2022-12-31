const getShader = (ctx, id) => {
  let shaderScript, theSource, currentChild, shader;

  shaderScript = document.getElementById(id);

  if (!shaderScript) {
    return null;
  }

  theSource = "";
  currentChild = shaderScript.firstChild;

  while(currentChild) {
    if (currentChild.nodeType == currentChild.TEXT_NODE) {
      theSource += currentChild.textContent;
    }

    currentChild = currentChild.nextSibling;
  }

  if (shaderScript.type == "x-shader/x-fragment") {
    shader = ctx.createShader(ctx.FRAGMENT_SHADER);
  } else if (shaderScript.type == "x-shader/x-vertex") {
    shader = ctx.createShader(ctx.VERTEX_SHADER);
  } else {
    // неизвестный тип шейдера
    return null;
  }

  ctx.shaderSource(shader, theSource);

  // скомпилировать шейдерную программу
  ctx.compileShader(shader);

  // Проверить успешное завершение компиляции
  if (!ctx.getShaderParameter(shader, ctx.COMPILE_STATUS)) {
    alert("An error occurred compiling the shaders: " + ctx.getShaderInfoLog(shader));
    return null;
  }

  return shader;
}

export default getShader
