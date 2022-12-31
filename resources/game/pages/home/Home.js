import React from "react";
import useGuestRedirect from "../../hooks/useGuestRedirect";
import "../../scss/pages/home.scss";
import Game from "../../classes/Game";

const classNames = {
  canvas: "canvas"
}

const Home = () => {
  useGuestRedirect(true, "/preview")

  const canvasRef = React.useRef();

  React.useEffect(() => {
    window.canvas = canvasRef.current

    window.canvas.height = document.body.offsetHeight
    window.canvas.width = document.body.offsetWidth

    window.ctx = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    const ctx = window.ctx;

    ctx.viewport(0, 0, canvas.width, canvas.height);

    new Game(ctx)

  }, [])

  return <div>
    <canvas className={classNames.canvas} ref={canvasRef}/>
  </div>
}

export default Home
