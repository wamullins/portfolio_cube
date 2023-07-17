import { OrbitControls, Html } from "@react-three/drei"
import { CubeSide } from "./CubeSide"
// import projectsArray from "../src/assets/projects.json";

export const Cube = () => {

    // {projectsArray.forEach((proj) => (
    //     console.log(proj.cubedim)
    //     ))
    // }

    const arr = [
        {position: [0,0,2.5], rotation: [0,0,0], color: "#A6808C", face:"front-face"},
        {position: [0,2.5,0], rotation: [-Math.PI / 2, 0, 0], face: "resume"},
    ]

    return(
        <group>
            {/* orbit controls allow user to control the camera */}
            <OrbitControls /> 
            
            {/* {arr.map((side, idx) => (
                 <CubeSide key={idx} position={side.position} rotation={side.rotation} color={side.color} face={side.face}/>
                ))
            } */}

            <CubeSide position={[0,0,2.5]} rotation={[0,0,0]} color="#A6808C" face="front-face"/>
            <CubeSide position={[0,2.5,0]} rotation={[-Math.PI / 2, 0, 0]} face="resume"/>
            <CubeSide position={[2.5,0,0]} rotation={[0, Math.PI / 2, 0]} color="#CCB7AE" face="projects"/>
            <CubeSide position={[0,-2.5,0]} rotation={[Math.PI / 2, 0, 0]} color="#565264" face="bottom"/>
            <CubeSide position={[-2.5,0,0]} rotation={[0, -Math.PI/2, 0 ]} color="#D6CFCB" face="about-me"/>
            <CubeSide position={[0,0, -2.5]} rotation={[ 0, -Math.PI, 0]} color="#706677" face="contact-links"/>
            
            
            {/* <mesh>
                <boxGeometry args={[5,5,5]}/>
                <meshNormalMaterial />
            </mesh> */}
            
        </group>
    )  
}