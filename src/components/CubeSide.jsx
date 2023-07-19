import { Html, Plane, Box, Text, Text3D, Center} from "@react-three/drei" 
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

import pic from '../../public/profile_picture_sq.png'

// const inter = import('@pmndrs/assets/fonts/inter_regular.woff')

export const CubeSide = ({ position, rotation, color, face}) => {

    const fontProps2D = {
        font: '/Amiko-Regular-webfont.woff', 
        position: [0,0,0.01], 
        fontSize: .5, 
        color: "#555" 
    }

    const fontProps3D = { 
        font:'/Inter_Bold.json',
        letterSpacing: -0.06,
        height: .2,
    }
    const faceFill = (face) => {
        if (face == "front-face"){
            return (
            <Center position={[0,1,0]}>
                <Box args={[4,.1,.3]}>
                    <meshMatcapMaterial color={"#706677"}/>
                </Box>
                <Center position= {[0,-.6,0.01]}>
                        <Text3D {...fontProps3D} scale={0.4}>
                            ANDREW MULLINS
                            <meshMatcapMaterial color={"black"}/>
                        </Text3D>
                </Center>
                <Box position={[0,-1.2,0]} args={[4,.1,.3]}>
                    <meshMatcapMaterial color={"#706677"}/>
                </Box>
                <Center position= {[0,-1.8,.01]}>
                        <Text3D {...fontProps3D}  scale={0.25} letterSpacing={-0.06}>
                            Full-Stack Software Engineer
                            <meshMatcapMaterial color={"#565264"}/>
                        </Text3D>
                </Center>
           </Center>
            )
        } else if (face == "projects"){
            return (
                <Center position= {[0,2,0.01]}>
                    <Text3D {...fontProps3D} scale={0.5}>
                        PROJECTS
                        <meshMatcapMaterial color={"black"}/>
                    </Text3D>
                    <Text3D {...fontProps3D} scale={0.5}>
                        PROJECTS
                        <meshBasicMaterial color={"white"} wireframe={true}/>
                    </Text3D>
                </Center>
            )
        } else if (face == "resume"){
            return (
                <Center position= {[0,2,0.01]}>
                    <Text3D {...fontProps3D} scale={0.5}>
                        RESUME
                        <meshPhysicalMaterial color={"gold"} reflectivity={1}/>
                    </Text3D>
                </Center>
            )
        } else if (face == "about-me"){
            return (
                <Center position= {[0,2,0.01]}>
                    <Text3D {...fontProps3D} scale={0.5}>
                        ABOUT ME
                        <meshMatcapMaterial color={"#565264"} />
                    </Text3D>
                </Center>
            )
        } else if (face == "contact-links"){
            return (
                <Center position= {[0,2,0.01]}>
                    <Text3D {...fontProps3D} scale={0.5}>
                        CONTACT ME
                        <meshMatcapMaterial color={"#565264"}/>
                    </Text3D>
                </Center>
            )
        } else if (face == "bottom"){
            const texture = useLoader(THREE.TextureLoader, pic)
            return (
                <>
                    <mesh position={[0,0,0.01]}>
                        <planeGeometry attach="geometry" args={[4, 4]} />
                        <meshBasicMaterial attach="material" map={texture} />
                    </mesh>
                    <Box position={[0,-2.1,0]} args={[4.4,.2,.2]}>
                        <meshMatcapMaterial color={"#D6CFCB"}/>
                    </Box>
                    <Box position={[0,2.1,0]} args={[4.4,.2,.2]}>
                        <meshMatcapMaterial color={"#D6CFCB"}/>
                    </Box>
                    <Box position={[2.1,0,0]} args={[.2,4.4,.2]}>
                        <meshMatcapMaterial color={"#D6CFCB"}/>
                    </Box>
                    <Box position={[-2.1,0,0]} args={[.2,4.4,.2]}>
                        <meshMatcapMaterial color={"#D6CFCB"}/>
                    </Box>
                </>
            )
        }
    }

    

    return (
        <mesh position={position} rotation={rotation}>
            
            <mesh>
                <planeGeometry args={[5,5]} />
                <meshBasicMaterial color={color} />
            </mesh>
            

            {faceFill(face)}


            {/* <Html position={position} transform occlude>
            <div className="cube-side">
                <div className="project-title">Andrew Mullins</div>
                <img className="project-image" src={image}></img>
                <div className="job-title">Full-Stack Software Engineer</div>
            </div>
            </Html> */}
        </mesh>
    )
}