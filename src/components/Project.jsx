import { Html , Box, Center, Text, Text3D} from "@react-three/drei"
import { useState, useContext } from 'react'
import MouseControlContext from "../MouseControlContext"
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

export const Project = ({ title, image, description, technology, deployLink, repoLink, sidedim}) => {

    const fontProps2D = {
        font: '/Amiko-Regular-webfont.woff', 
        fontSize: 0.2,
        maxWidth: 3,
        anchorX: "left",
        anchorY: "middle"
    }

    const fontProps3D = { 
        font:'/Inter_Bold.json',
        letterSpacing: -0.06,
        scale: 0.2,
        height: .3,
    }

    const popupStyle = {
        position: "absolute",
        width: "300px",
        top: "50%",
        left: "81%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    const infoStyle = {
        padding: "20px",
        width: "300px",
        borderRadius: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, .5)",
    }

    const titleStyle = {
        textAlign: 'center',
        fontSize: '30px',
        padding: "2px",
    }

    const descriptionStyle = {
        height: "300px",
        fontSize:"20px",
        overflowY: "scroll",
        padding: "5px",
        marginBottom: "10px",
        borderRadius: "5px",
        border: "1px solid black"
    }

    const techStyle = {
        fontSize:"20px",
        overflowY: "scroll",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid black"
    }

    const repoStyle = {
        fontSize:"20px",
        marginTop: "3px",
        textAlign: "center",
        textDecoration: "none",
        color: "green",
    }
    const messageStyle = {
        fontSize:"15px",
        textAlign: "center",
    }

    const buttonStyle = {
        position: "absolute",
        left: "0",
        fontSize:"20px",
        height: "30px",
        width: "30px",
        background: "#9D3D3D",
        border: "none",
        borderRadius: "20%",
    }

    const DescriptionComp = () => {
        return (
            <div className="project-popup" style={popupStyle}>
                <div className="camera-message" style={messageStyle} >(Close this window to resume navigating the cube)</div>
                <div className="project-info" style={infoStyle}>
                    <button style={buttonStyle} onClick={() => handleClick(false, <></>)}>X</button>
                    <div className="desc-title" style={titleStyle}>{title}</div>
                    <div className="project-desc" style={descriptionStyle}>{description}</div>
                    <div className="technologies" style={techStyle}>Technologies: {technology}</div>
                    <a className="repo-link" style={repoStyle} href={repoLink}>GitHub Repo</a>
                </div>
            </div>
            
        )
    }

    const [clickState, setClickState] = useState(false)
    const { cameraOnProject, setCameraOnProject } = useContext(MouseControlContext)

    const handleClick = (bool, desc) => {
        console.log("click")
        setClickState(bool)
        setCameraOnProject({ ...cameraOnProject, cameraControls: !bool, projectDescription: desc})
    }
    //  switch this to a click ratehr than a hover so that I don't have to deal with the rotating issues
    // of figure out how to only disbale the zoom feature of the camera instead of the entire camera controls

    const texture = useLoader(THREE.TextureLoader, image)


    return (
        <Center position={sidedim}>
            <mesh position={[0,0.16,0.01]}>
                <planeGeometry attach="geometry" args={[2.2, 1.45]} />
                <meshBasicMaterial attach="material" map={texture} />
            </mesh>
            <Box position={[0,-0.92,0]} args={[2.3,0.08,.2]}>
                <meshStandardMaterial color={"white"} metalness={1} roughness={0.1} />
            </Box>
            <Box position={[0,-0.72,0]} args={[2.3,0.3,.1]}>
                <meshStandardMaterial color={"#50584D"} metalness={1} roughness={0.1} />
            </Box>
            <Text {...fontProps2D} position={[-1,-0.72,0.06]}>
                {title}
                <meshStandardMaterial color={"white"} metalness={0.8} roughness={0.2} />
            </Text>
            <Box position={[0,0.92,0]} args={[2.3,0.08,.2]}>
                <meshStandardMaterial color={"white"} metalness={1} roughness={0.1} />
            </Box>
            { clickState ? (
                <Text3D {...fontProps3D} position={[0.62,-0.82,0]} onClick={() => handleClick(false, <></>)}>
                    X
                    <meshStandardMaterial color={"#9D3D3D"} metalness={0.8} roughness={0.1} />
                </Text3D>
            ): (
                <Text3D {...fontProps3D} position={[0.62,-0.82,0]} onClick={() => handleClick(true, DescriptionComp())}>
                    ?
                    <meshStandardMaterial color={"skyblue"} metalness={0.8} roughness={0.1} />
                </Text3D>
            )}
            <Text3D {...fontProps3D}  position={[0.84,-0.82,0]} onClick={() => window.open(deployLink)}>
                →
                <meshStandardMaterial color={"white"} metalness={0.8} roughness={0.1} />
            </Text3D>
        </Center>
    )
}
