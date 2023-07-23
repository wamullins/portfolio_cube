import { CubeSide } from "./CubeSide"
// import projectsArray from "../src/assets/projects.json";

export const Cube = () => {

    // define position, orientation, and background color for each cube face
    const sides = [
        {face:"front-face", position: [0,0,2.5], rotation: [0,0,0], color: "#706677"},
        {face: "resume", position: [0,0, -2.5], rotation: [ 0, -Math.PI, 0], color: "#CCB7AE"},
        {face: "projects", position: [2.5,0,0], rotation: [0, Math.PI / 2, 0], color: "#50584D"},
        {face: "bottom", position: [0,-2.5,0], rotation:[Math.PI / 2, 0, 0], color: "#242424"},
        {face: "about-me", position: [-2.5,0,0], rotation:[0, -Math.PI/2, 0 ], color: "#642C2C"},
        {face: "contact-links", position: [0,2.5,0], rotation: [-Math.PI / 2, 0, 0], color: "#A6808C"},
    ]

    return(
        <group>
            {sides.map((side, idx) => (
                <CubeSide key={idx} position={side.position} rotation={side.rotation} color={side.color} face={side.face}/>
                ))
            }

            {/* <mesh>
                <boxGeometry args={[5,5,5]}/>
                <meshNormalMaterial />
            </mesh> */}
        </group>
    )  
}