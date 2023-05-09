import { useGLTF, useAnimations, Clone } from "@react-three/drei"
import { useEffect } from "react"


export default function Windturbine(props) {
  const { scene, animations } = useGLTF("./model.gltf")
  const { ref, actions } = useAnimations(animations)
  
  useEffect(() => {
    actions.Wind_turbine_001_BladesAction.play()
    return () => actions.Wind_turbine_001_BladesAction.stop()
  }, [])

  return <Clone ref={ref} object={scene} {...props} />

}
