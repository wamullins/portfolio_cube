import { Text, Text3D} from "@react-three/drei"
import { Flex, Box } from '@react-three/flex'
import resumePDF from "../assets/Resume_2023_07_23.pdf"

export const Resume = () => {

    const fontProps2D = {
        font: '/Amiko-Regular-webfont.woff', 
        fontSize: 0.09,
        maxWidth: 4,
        textAlign: "left",
        anchorX: "left",
        anchorY: "top"
    }

    const fontProps3D = { 
        font:'/Inter_Bold.json',
        letterSpacing: -0.06,
        height: .2,

    }

    const handleClick = () => {
        window.open(resumePDF)
    }




    return(
        <group>
            <Flex flexDirection={"column"}>
                <Box leftAnchor height={0.2} marginLeft={-2}>
                    <Text {...fontProps2D} fontSize={0.15} >
                        Skills
                        <meshStandardMaterial color={"#755500"} />
                    </Text>
                </Box>
                <Box leftAnchor height={0.12} marginLeft={-2}>
                    <Text {...fontProps2D}>
                        Languages:  JavaScript, HTML5, CSS3,  MATLAB, Python
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box >
                <Box leftAnchor height={0.12} marginLeft={-2}>
                    <Text {...fontProps2D}>
                        Libraries and Frameworks: Express.js, React.js, Mongoose, Node.js, JQuery, THREE.js 
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box> 
                <Box leftAnchor height={0.12} marginLeft={-2}>
                <Text {...fontProps2D}>
                        Databases: MongoDB, PostgresSQL, Django
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box>
                <Box leftAnchor height={0.12} marginLeft={-2}>
                    <Text {...fontProps2D}>
                        Other: Linus, JSON, Github, VSCode, Trello, Figma
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box>
                <Box leftAnchor height={0.2} marginLeft={-2}>
                    <Text {...fontProps2D} fontSize={0.15}>
                        Professional Experience
                        <meshStandardMaterial color={"#755500"} />
                    </Text>
                </Box>
                <Box leftAnchor height={.1} marginLeft={-2}>
                    <Text {...fontProps2D} outlineWidth={0.002}>
                        Postbac IRTA, National Institutes of Health (NIH, NINDS) | Bethesda, MD 
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box>
                <Box leftAnchor height={.15} marginLeft={-2}>
                    <Text {...fontProps2D}>
                        ( July 2020 - March 2023 )
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box>
                <Box leftAnchor height={.25} marginLeft={-1.8}>
                    <Text {...fontProps2D} maxWidth={3.8}>
                        • Acquisition and processing of 3T and 7T MRI scans for Multiple Sclerosis research in the Translational Neuroradiology Section (TNS) 
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box>  
                <Box leftAnchor height={.25} marginLeft={-1.8}>
                    <Text {...fontProps2D} maxWidth={3.8}>
                        • Performed manual and semi-automated segmentation of brain and spine scans using MATLAB, Python, and ITK-SNAP
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box>
                <Box leftAnchor height={.25} marginLeft={-1.8}>
                    <Text {...fontProps2D} maxWidth={3.8}>
                        • Analysis of disease progression and its relationship with metrics such as lesion burden, type, and location with Excel, SPSS, and R-Studio
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box>
                <Box leftAnchor height={.1} marginLeft={-2}>
                    <Text {...fontProps2D} outlineWidth={0.002}>
                        Undergraduate Researcher, VUMC Department of Neurology | Nashville, TN
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box>
                <Box leftAnchor height={.15} marginLeft={-2}>
                    <Text {...fontProps2D} >
                       ( April 2019 - May 2020 )
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box>
                <Box leftAnchor height={.25} marginLeft={-1.8}>
                    <Text {...fontProps2D} maxWidth={3.8}>
                        • Applied atrophy network mapping to study and explain patterns of neuron loss in frontotemporal lobar degeneration patients using MATLAB
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box>
                <Box leftAnchor height={0.2} marginLeft={-2}>
                    <Text {...fontProps2D} fontSize={0.15} >
                        Education
                        <meshStandardMaterial color={"#755500"}/>
                    </Text>
                </Box>
                <Box leftAnchor height={0.1} marginLeft={-2}>
                    <Text {...fontProps2D} outlineWidth={0.002}>
                        General Assembly | Remote
                        <meshStandardMaterial color={"black"}/>
                    </Text>
                </Box>
                <Box leftAnchor height={0.1} marginLeft={-2}>
                    <Text {...fontProps2D}>
                        ( May 2023 - August 2023 )
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box>
                <Box leftAnchor height={0.25} marginLeft={-1.8}>
                    <Text {...fontProps2D} maxWidth={3.8}>
                        • Completing 12-week, immersive coding bootcamp that involves creating 4 front-end, back-end, and full-stack applications in teams and independently
                        <meshStandardMaterial color={"black"}/>
                    </Text>
                </Box>
                <Box leftAnchor height={.1} marginLeft={-2}>
                    <Text {...fontProps2D} outlineWidth={0.002}>
                        Vanderbilt University | Nashville, TN 	August 2016 - May 2020
                        <meshStandardMaterial color={"black"}/>
                    </Text>
                </Box>
                <Box leftAnchor height={.11} marginLeft={-2}>
                    <Text {...fontProps2D} >
                        ( August 2016 - May 2020 )
                        <meshStandardMaterial color={"black"}/>
                    </Text>
                </Box>
                <Box leftAnchor height={.1} marginLeft={-2}>
                    <Text {...fontProps2D}>
                        Bachelor of Arts in Neuroscience | Minor in Medical Sociology	
                        <meshStandardMaterial color={"black"}/>
                    </Text>
                </Box>
                <Box leftAnchor height={.1} marginLeft={-2}>
                    <Text {...fontProps2D}>
                        Honors: Cum Laude, Dean’s List
                        <meshStandardMaterial color={"black"}/>
                    </Text>
                </Box>
            </Flex>
            <Text3D {...fontProps3D} scale={0.2} position={[0.6,-3.7,0]} onClick={handleClick}>
                View PDF
                <meshStandardMaterial color={"gold"} metalness={1} roughness={0.07}/>
            </Text3D>
          
        </group>
    )
}