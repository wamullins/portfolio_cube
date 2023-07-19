import * as THREE from 'three'
import { Suspense, useRef , useContext, useEffect} from 'react'
import CubeContext from '../CubeContext'
import { Canvas, useThree } from '@react-three/fiber'
import { CameraControls , OrbitControls} from "@react-three/drei"
import { Cube } from "./Cube"


export const Display = () => {

    return (   
        <Canvas camera={{ position: [5,3,15], fov: 20}}>
            <Scene/>
        </Canvas>
        
    )
}

const Scene = () => {

    const cameraControlsRef = useRef()

    const { camera } = useThree()

    // const { cubeInfo } = useContext(CubeContext)

    // useEffect(() => {
    //     console.log(cubeInfo.cameraLocation)
    // }, [cubeInfo.cameraLocation])
    
    return(
        <group>
                {/* <ambientLight /> */}
                <pointLight position={[0, 20, 10]} intensity={1.5} />
                <Suspense fallback={null}>
                    < Cube />
                </Suspense>
                <CameraControls
                    ref={cameraControlsRef}
                    enabled= {true}
                    verticalDragToForward={false}
                />
                {/* <OrbitControls/>   */}
            </group>
    )
    
}
