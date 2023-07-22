import { Suspense, useRef, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { CameraControls , OrbitControls, Html} from "@react-three/drei"
import { Cube } from "./Cube"
import CameraContext from '../CameraContext.jsx'


export const Display = ({camSideCor}) => {

    const cameraControlsRef = useRef()

    const navigate = useNavigate();

    const handleClick = (cor) => {
        // on click rotate the camera around the cube to the appropriate area. The true at the end makes it a smooth rotation rather than snapping to it immediately
        navigate(cor.id)
        cameraControlsRef.current?.setPosition(cor.x, cor.y, cor.z, true)
      };

    const { cameraAllowed } = useContext(CameraContext)
    
    return(
        <>
            <group>
                    <hemisphereLight intensity={.1}/>
                    {/* To backlight the front page */}
                    <directionalLight position={[-4, 2, -24]} intensity={.1}/>

                    {/* front facing */}
                    <directionalLight position={[-7, -3, 40]} intensity={.2}/>
                    {/* <pointLight position={[0,0,4]} intensity={3}/> */}
                    <rectAreaLight position={[0,0,3]} intensity={3}/>
                    
                    {/* for the resume page */}
                    <directionalLight position={[0, 1, -10]} intensity={.2}/>
                    {/* <directionalLight position={[0, 0, -5]} intensity={.2}/> */}

                    {/* for projects page */}
                    <rectAreaLight position={[5, 0, 0]} intensity={.4} rotation={[0, Math.PI / 2, 0]}/>
                    <directionalLight position={[10, 1, 0]} intensity={.5}/>

                    {/* about me*/}
                    <directionalLight position={[-10, 1, 0]} intensity={.5}/>

                    {/* bottom */}
                    <directionalLight position={[0, -10, 0]} intensity={.5}/>
                    



                    <Suspense fallback={null}>
                        < Cube />
                    </Suspense>
                    <CameraControls
                        ref={cameraControlsRef}
                        enabled= {cameraAllowed}
                        verticalDragToForward={false}
                    />
            </group>
            <Html fullscreen>
                <div className="nav-links">
                    <a onClick={()=> handleClick(camSideCor.find(side => side.id === "/"))} >Home</a>
                    <a onClick={()=> handleClick(camSideCor.find(side => side.id === "/projects"))}>Projects</a>
                    <a onClick={()=> handleClick(camSideCor.find(side => side.id === "/resume"))}>Resume</a>
                    <a onClick={()=> handleClick(camSideCor.find(side => side.id === "/aboutme"))}>About Me</a>
                </div>
            </Html>
        </>
    )
    
}
