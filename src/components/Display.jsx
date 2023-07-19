import { Suspense, useRef} from 'react'
import { useNavigate } from "react-router-dom";
import { CameraControls , OrbitControls, Html} from "@react-three/drei"
import { Cube } from "./Cube"


export const Display = ({camSideCor}) => {

    const cameraControlsRef = useRef()

    const navigate = useNavigate();

    const handleClick = (cor) => {
        // on click rotate the camera around the cube to the appropriate area. The true at the end makes it a smooth rotation rather than snapping to it immediately
        navigate(cor.id)
        cameraControlsRef.current?.setPosition(cor.x, cor.y, cor.z, true)
      };
    
    return(
        <>
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
