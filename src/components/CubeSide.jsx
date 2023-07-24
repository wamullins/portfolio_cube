import { Html, Plane, Box, Text, Text3D, Center} from "@react-three/drei" 
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { Suspense } from "react"

import { Resume } from './Resume'
import { ContactMe } from './ContactMe'
import { Project } from './Project'
import projectsArr from '../assets/projects.json'
import pic from '../../public/profile_picture_sq.png'

// const inter = import('@pmndrs/assets/fonts/inter_regular.woff')

export const CubeSide = ({ position, rotation, color, face}) => {

    console.log(projectsArr[0].sidedim)

    const fontProps2D = {
        font: '/Amiko-Regular-webfont.woff', 
        fontSize: 0.19,
        maxWidth: 4,
        textAlign: "center",
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
                    <meshStandardMaterial color={"#706677"} metalness={1} roughness={0}/>
                </Box>
                <Center position= {[0,-.6,0.01]}>
                        <Text3D {...fontProps3D} scale={0.4}>
                            ANDREW MULLINS
                            <meshStandardMaterial color={"silver"}  metalness={1} roughness={0} />
                        </Text3D>
                </Center>
                <Box position={[0,-1.2,0]} args={[4,.1,.3]}>
                    <meshStandardMaterial color={"#706677"} metalness={1} roughness={0}/>
                </Box>
                <Center position= {[0,-1.8,0.01]}>
                        <Text3D {...fontProps3D}  scale={0.25} letterSpacing={-0.06}>
                            Full-Stack Software Engineer
                            <meshStandardMaterial color={"#565264"} metalness={1} roughness={0}/>
                        </Text3D>
                </Center>
           </Center>
            )
        } else if (face == "projects"){
            return (
                <group>
                    <Center position= {[0,2,0.01]}>
                        <Text3D {...fontProps3D} scale={0.5}>
                            PROJECTS
                            <meshStandardMaterial color={"silver"} metalness={1} roughness={0.07}/>
                        </Text3D>
                        <Text3D {...fontProps3D} scale={0.5}>
                            PROJECTS
                            <meshBasicMaterial color={"black"} wireframe={true}/>
                        </Text3D>
                    </Center>
                    {
                        projectsArr.map((proj) => (
                            <Project key={proj.key} title={proj.title} image={proj.image} description={proj.description} technology={proj.technology} deployLink={proj.links.deploy} repoLink={proj.links.git} sidedim={proj.sidedim}/>
                        ))
                    }
                    
                </group>
                
            )
        } else if (face == "resume"){
            return (
                <group>
                    <Center position= {[0,2,0.01]}>
                        <Text3D {...fontProps3D} scale={0.5}>
                            RESUME
                            <meshStandardMaterial color={"gold"} metalness={1} roughness={0.07}/>
                        </Text3D>
                    </Center>
                    <group position={[0,1.6,0.01]}>
                        <Resume/>
                    </group>
                    <Box position={[2.2,0,0]} args={[0.1,4.4,0.2]}>
                        <meshStandardMaterial color={"gold"} metalness={1} roughness={0.07}/>
                    </Box>
                    <Box position={[-2.2,0,0]} args={[0.1,4.4,0.2]}>
                        <meshStandardMaterial color={"gold"} metalness={1} roughness={0.07}/>
                    </Box>
                </group>
            )
        } else if (face == "about-me"){
            return (
                <group>
                    <Center position= {[0,2,0.01]}>
                        <Text3D {...fontProps3D} scale={0.5}>
                            ABOUT ME
                            <meshStandardMaterial color={"#565264"} metalness={1} roughness={.1}/>
                        </Text3D>
                    </Center>
                    <group position={[0,-0.2,0.01]}>
                        <Text {...fontProps2D}>
                            I am a software engineer based just outside of Washington, DC in Chevy Chase, MD. I crave puzzles and am highly motivated when feeling challenged.
                            From my previous work in neuroscience research, I have strong skills in problem solving, data manipulation, team collaboration, and public speaking. I enjoy creating clean and efficient backend architectures, but am most interested in developing engaging, intuitive, and appealing front-end interfaces.
                            <meshStandardMaterial color={"white"} />
                        </Text>
                        <Box position={[0,-1.4,0]} args={[4.4,0.1,0.1]}>
                            <meshStandardMaterial color={"#565264"} metalness={1} roughness={0.1} />
                        </Box>
                        <Box position={[0,1.4,0]} args={[4.4,0.1,0.1]}>
                            <meshStandardMaterial color={"#565264"} metalness={1} roughness={0.1}/>
                        </Box>
                        <Box position={[2.1,0,0]} args={[0.1,3,0.1]}>
                            <meshStandardMaterial color={"#565264"} metalness={1} roughness={0.1}/>
                        </Box>
                        <Box position={[-2.1,0,0]} args={[0.1,3,0.1]}>
                            <meshStandardMaterial color={"#565264"} metalness={1} roughness={0.1}/>
                        </Box>
                    </group>
                </group>
            )
        } else if (face == "contact-links"){
            return (
                <group>
                <Center position= {[0,2,0.01]}>
                    <Text3D {...fontProps3D} scale={0.5}>
                        CONTACT ME
                        <meshStandardMaterial color={"#565264"} metalness={1} roughness={.1}/>
                    </Text3D>
                </Center>
                    <Center position={[0,-0.15,0.01]}>
                        <ContactMe/>

                        <Box position={[1.5,-1.63,0]} args={[1,0.15,0.1]}>
                            <meshStandardMaterial color={"#565264"} metalness={1} roughness={0.1} />
                        </Box>
                        <Box position={[1.5,1.63,0]} args={[1,0.15,0.1]}>
                            <meshStandardMaterial color={"#565264"} metalness={1} roughness={0.1}/>
                        </Box>
                        <Box position={[-1.5,1.63,0]} args={[1,0.15,0.1]}>
                            <meshStandardMaterial color={"#565264"} metalness={1} roughness={0.1} />
                        </Box>
                        <Box position={[-1.5,-1.63,0]} args={[1,0.15,0.1]}>
                            <meshStandardMaterial color={"#565264"} metalness={1} roughness={0.1}/>
                        </Box>

                        {/* vertical */}

                        <Box position={[1.93,1.2,0]} args={[0.15,1,0.1]}>
                            <meshStandardMaterial color={"#565264"} metalness={1} roughness={0.1}/>
                        </Box>
                        <Box position={[-1.93,1.2,0]} args={[0.15,1,0.1]}>
                            <meshStandardMaterial color={"#565264"} metalness={1} roughness={0.1}/>
                        </Box>
                        <Box position={[-1.93,-1.2,0]} args={[0.15,1,0.1]}>
                            <meshStandardMaterial color={"#565264"} metalness={1} roughness={0.1}/>
                        </Box>
                        <Box position={[1.93,-1.2,0]} args={[0.15,1,0.1]}>
                            <meshStandardMaterial color={"#565264"} metalness={1} roughness={0.1}/>
                        </Box>
                    </Center >
                </group>
            )
        } else if (face == "bottom"){
            const texture = useLoader(THREE.TextureLoader, pic)
            return (
                <>
                    <mesh position={[0,0,0.01]}>
                        <planeGeometry attach="geometry" args={[4, 4]} />
                        <meshBasicMaterial attach="material" map={texture} />
                    </mesh>
                    <Box position={[0,-2.1,0]} args={[4.4,0.2,0.2]}>
                        <meshStandardMaterial color={"white"} metalness={1} roughness={0.1} />
                    </Box>
                    <Box position={[0,2.1,0]} args={[4.4,0.2,0.2]}>
                        <meshStandardMaterial color={"white"} metalness={1} roughness={0.1}/>
                    </Box>
                    <Box position={[2.1,0,0]} args={[0.2,4.4,0.2]}>
                        <meshStandardMaterial color={"white"} metalness={1} roughness={0.1}/>
                    </Box>
                    <Box position={[-2.1,0,0]} args={[0.2,4.4,0.2]}>
                        <meshStandardMaterial color={"white"} metalness={1} roughness={0.1}/>
                    </Box>
                </>
            )
        }
    }

    

    return (
        <mesh position={position} rotation={rotation}>
            
            <mesh>
                <planeGeometry args={[5,5]} />
                <meshStandardMaterial color={color} metalness={.5} roughness={.5}/>
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