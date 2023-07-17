import { Html } from "@react-three/drei" 

export const CubeSide = ({ position}) => {

    return (
        <mesh>
            <Html position={position} transform occlude>
            <div className="cube-side home-div">
                <div className="main-name">Andrew Mullins</div>
                <div className="underline"></div>
                <div className="job-title">Full-Stack Software Engineer</div>
            </div>
            </Html>
        </mesh>
    )
}