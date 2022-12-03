import React from "react";
import * as three from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Home = () => {
  const containerRef = React.useRef()

  React.useEffect(() => {

    const loader = new GLTFLoader()

    const scene = new three.Scene();

    const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)
    camera.position.z = 115;

    const renderer = new three.WebGLRenderer({ antialias: true })

    const geometry = new three.BoxGeometry(1, 1, 0.2)
    const material = new three.MeshBasicMaterial({ color: 0x00ff00 } )
    const light = new three.Light(0xffffff, 1)

    const mesh = new three.Mesh(geometry, material)

    scene.add(mesh)
    scene.add(light)

    loader.load("/glTF/ABeautifulGame.gltf", (gltf) => {
      scene.add(gltf.scene)
    }, undefined, function ( error ) {

      console.error( error );

    } )


    renderer.setSize(window.innerWidth, window.innerHeight)

    containerRef.current.appendChild(renderer.domElement)

    renderer.render(scene, camera)

  }, [])

  return <div ref={containerRef}>
  </div>
}

export default Home
