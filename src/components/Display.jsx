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
                    <directionalLight position={[-9.5, -3, 40]} intensity={.1}/>
                    <directionalLight position={[-5.5, -3, 40]} intensity={.1}/>
                    <pointLight position={[0,0.6,3]} intensity={0.5}/>
                    <pointLight position={[1.5,0.6,3]} intensity={0.5}/>
                    <pointLight position={[-1.5,0.6,3]} intensity={0.5}/>
                    <rectAreaLight position={[0,0,3]} intensity={1}/>
                    
                    {/* for the resume page */}
                    <directionalLight position={[0, 1, -10]} intensity={.2}/>
                    <pointLight position={[-1.7,-2.4,-10]} intensity={0.2}/>

                    {/* for projects page */}
                    <rectAreaLight position={[5, 0, 0]} intensity={.4} rotation={[0, Math.PI / 2, 0]}/>
                    <directionalLight position={[10, 1, 0]} intensity={.5}/>

                    {/* about me*/}
                    <directionalLight position={[-10, 1, 0]} intensity={.5}/>

                    {/* contact me */}
                    <pointLight position={[-2, 3, -2]} intensity={.2} />
                    <pointLight position={[2, 3, -2]} intensity={.2} />
                    <pointLight position={[-1, 3, -2]} intensity={.2} />
                    <pointLight position={[1, 3, -2]} intensity={.2} />

                    {/* bottom */}
                    <directionalLight position={[0, -10, 0]} intensity={.5}/>
                    



                    <Suspense fallback={null}>
                        < Cube />
                    </Suspense>
                    <CameraControls
                        ref={cameraControlsRef}
                        enabled= {cameraAllowed.cameraControls}
                        verticalDragToForward={false}
                    />
                     {/* <OrbitControls enabled={cameraAllowed.orbitControls}enablePan={false} enableZoom={false} /> */}

            </group>
            <Html fullscreen>
                <div className="nav-links">
                    <div onClick={()=> handleClick(camSideCor.find(side => side.id === "/"))} >Home</div>
                    <div onClick={()=> handleClick(camSideCor.find(side => side.id === "/projects"))}>Projects</div>
                    <div onClick={()=> handleClick(camSideCor.find(side => side.id === "/resume"))}>Resume</div>
                    <div onClick={()=> handleClick(camSideCor.find(side => side.id === "/aboutme"))}>About Me</div>
                    <div onClick={()=> handleClick(camSideCor.find(side => side.id === "/contactme"))}>Contact Me</div>
                </div>
                <div className="contact-links">
                    <a href="https://www.linkedin.com/in/w-andrew-mullins/" target="_blank"><img src="https://static-00.iconduck.com/assets.00/linkedin-with-circle-icon-2048x2048-np6yltn1.png"/></a>
                    <a href="https://github.com/wamullins" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></a>
                </div>
            </Html>
        </>
    )
    
}
