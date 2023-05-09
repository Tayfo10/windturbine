import { Center, Plane, Float, Text, Environment, Text3D, Sky, Cloud} from '@react-three/drei'

import Windturbine from './Windturbine'
import { useMatcapTexture } from '@react-three/drei'


export default function Experience(){

    const [ matcapTexture ] = useMatcapTexture('3B6E10_E3F2C3_88AC2E_99CE51', 256)
    const [ matcapTexture1 ] = useMatcapTexture('385264_A1D3E2_86ADC1_6E94A8', 256)
    
    return <>

        <ambientLight intensity={0.7}/>
        

        <Sky sunPosition={ [-1,2,3] }/>
        <Environment preset='city'/>
        <Float 
        rotation-y={0.15}
        rotationIntensity={0.4}
        speed={2}>
            
            <Center top left position={[1,1,0.5]}>
            <Text3D 
            font={'/assets/Bangers_Regular.json'}
            size={ 0.85  } 
            height={ 0.2  } 
            curveSegments={ 32 } 
            bevelEnabled 
            bevelThickness={ 0.02  } 
            bevelSize={ 0.02  } 
            bevelOffset={ 0  } 
            bevelSegments={ 5  } 
             >
                GREEN ENERGY
                <meshMatcapMaterial matcap={matcapTexture} position={[-3,0,2]}/>
            </Text3D>
            
            </Center>

            <Center position={[-2.8,0.8,0]}>
            <Text3D 
            font={'/assets/Bangers_Regular.json'}
            size={ 0.25 } 
            height={ 0.2  } 
            curveSegments={ 32 } 
            bevelEnabled 
            bevelThickness={ 0.02  } 
            bevelSize={ 0.02  } 
            bevelOffset={ 0  } 
            bevelSegments={ 5  } 
             >
                Reduced greenhouse gas emissions
                

                <meshMatcapMaterial matcap={matcapTexture1} />
            </Text3D>
            </Center>
            <Center position={[-2.6,0.4,0]}>
            <Text3D 
            font={'/assets/Bangers_Regular.json'}
            size={ 0.25 } 
            height={ 0.2  } 
            curveSegments={ 32 } 
            bevelEnabled 
            bevelThickness={ 0.02  } 
            bevelSize={ 0.02  } 
            bevelOffset={ 0  } 
            bevelSegments={ 5  } 
             >
                
                Decreased dependence on fossil fuels

                <meshMatcapMaterial matcap={matcapTexture1} />
            </Text3D>
            </Center>
            <Text fontSize={0.15} position={[-1.3,0,0]} color="#28B463">
                The use of green and renewable energy is crucial for creating a cleaner,
                more sustainable world for future generations
            
            </Text>
            <Center position={[-2.6,-1,0]}>
            <Text3D 
            font={'/assets/Bangers_Regular.json'}
            size={ 0.35 } 
            height={ 0.2  } 
            curveSegments={ 32 } 
            bevelEnabled 
            bevelThickness={ 0.02  } 
            bevelSize={ 0.02  } 
            bevelOffset={ 0  } 
            bevelSegments={ 5  } 
            
            
             >
                
                #GOGREEN

                <meshMatcapMaterial matcap={matcapTexture} />
            </Text3D>
            </Center>
            
        </Float>
        
        <Windturbine scale={0.55} position={[3, -1, 2]} rotation-y={-0.7} />
        <Windturbine scale={0.54} position={[4, -1, 0]} rotation-y={-0.7}/>
        <Windturbine scale={0.53} position={[5, -1, -2]} rotation-y={-0.7}/>
        <Windturbine scale={0.5} position={[6, -1, 0]} rotation-y={-0.7}/>
        <Windturbine scale={0.5} position={[6, -1, -1.5]} rotation-y={-0.7}/>
        <Plane receiveShadow args={[7,100]} rotation-x={-1.6} rotation-z={-0.6} position={[5.1, -1.003, 0]}>
            <meshMatcapMaterial matcap={matcapTexture}/>
        </Plane>
        
    </>
}