import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App'
import { OrthographicCamera, PerspectiveCamera, PresentationControls } from '@react-three/drei'
import { GradientTexture } from '@react-three/drei'
const root = ReactDOM.createRoot(document.querySelector('#root'))





root.render(

    

    <Canvas
        shadows
        
    >
        <PerspectiveCamera frames={256}>
        
        <color attach="background"/>
        <PresentationControls
        global={true}
        cursor={true}
        polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{mass:2, tension:400}}
            snap={{mass:4, tension:400}}
        >
            <App/>
        </PresentationControls>
        </PerspectiveCamera>
    </Canvas>
)