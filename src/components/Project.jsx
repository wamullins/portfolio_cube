import { Html , Box, Center } from "@react-three/drei"
import { useState, useContext } from 'react'
import CameraContext from "../CameraContext"

export const Project = ({ title, image, description, technology, deployLink, repoLink, sidedim}) => {

    const divStyle = {
        width: "90px",
        height: "70px",
        display: "flex",
        flexDirection: "column",

        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const titleStyle = {
        fontSize: "8px",
        height: "8px",
        padding: "1px",
        background: "white",
    }

    const infoStyle = {
        height: "60px",
        display: "flex",
        flexDirection: "column",
    }

    const descriptionStyle = {
        height: "50px",
        fontSize:"5px",
        overflowY: "scroll",
    }

    const [hoverState, setHoverState] = useState(false)
    const { setCameraAllowed } = useContext(CameraContext)

    const handleHover = (bool) => {
        setHoverState(bool)
        setCameraAllowed(!bool)
    }

    return (
        <Center position={sidedim}>
            <Html occlude transform> 
                <div className="project-div" style={divStyle} onPointerOver={() => handleHover(true)} onPointerOut={() => handleHover(false)}>
                    { hoverState ? (
                        <div className="project-info" style={infoStyle}>
                            <div className="project-desc" style={descriptionStyle}>{description}</div>
                        </div>
                    ):(
                        <div style={{height: "60px"}}></div>
                    )}
                    <div className="project-title" style={titleStyle}>{title}</div>
                </div>
            </Html>
            <Box position={[0,-0.92,0]} args={[2.3,0.08,.2]}>
                <meshStandardMaterial color={"white"} metalness={1} roughness={0.1} />
            </Box>
            <Box position={[0,0.92,0]} args={[2.3,0.08,.2]}>
                <meshStandardMaterial color={"white"} metalness={1} roughness={0.1} />
            </Box>
{/* little github logo and an arrow icon (deployed site) on the right side of the title */}
        </Center>
    )
}
