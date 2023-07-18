import { Html, Plane, Text, Svg} from "@react-three/drei" 
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

import pic from '../public/profile_picture_sq.png'

// const inter = import('@pmndrs/assets/fonts/inter_regular.woff')

export const CubeSide = ({ position, rotation, color, face}) => {

    const faceFill = (face) => {
        if (face == "front-face"){
            return (
                <Text position={[0,0,0.01]} fontSize={.5} color="#555"> Andrew Mullins</Text>
                // <Html position={[0,0,0.01]} occlude transform>

                //     {/* <div style={{fontSize:"7vmin", backgroundColor:"brown"}}>andrew Mullins</div>
                //     <div style={{fontSize:"7vmin"}}>andrew Mullins</div>
                //     <div style={{fontSize:"7vmin"}}>andrew Mullins</div> */}
                //     {/* <img src="/profile_picture_sq.png"></img> */}
                // </Html>
            )
        } else if (face == "projects"){
            return (
                <Text position={[0,0,0.01]} fontSize={.5} color="#555">Projects</Text>
            )
        } else if (face == "resume"){
            return (
                <Text position={[0,0,0.01]} fontSize={.5} color="#555">Resume</Text>
            )
        } else if (face == "about-me"){
            return (
                <Text position={[0,0,0.01]} fontSize={.5} color="#555">About Me</Text>
            )
        } else if (face == "contact-links"){
            return (
                <Text position={[0,0,0.01]} fontSize={.5} color="#555">Contact Me</Text>
            )
        } else if (face == "bottom"){
            const texture = useLoader(THREE.TextureLoader, pic)
            return (
                <mesh position={[0,0,0.01]}>
                    <planeGeometry attach="geometry" args={[4, 4]} />
                    <meshBasicMaterial attach="material" map={texture} />
                </mesh>
            )
        }
    }

    

    return (
        <mesh position={position} rotation={rotation}>
            <Plane material-color={color} args={[5,5]}/>

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