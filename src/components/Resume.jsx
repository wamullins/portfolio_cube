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

    const resumeArr = [
        {
            text: "Skills",
            boxFormat: {
                height:0.2,
                marginLeft:-2
            },
            textFormat: {fontSize: 0.15},
            textColor: "#755500"
        },
        {
            text: "Languages:  JavaScript, HTML5, CSS3,  MATLAB, Python",
            boxFormat: {
                height:0.12,
                marginLeft:-2
            },
            textFormat: {},
            textColor: "black"
        },
        {
            text: "Libraries and Frameworks: Express.js, React.js, Mongoose, Node.js, JQuery, THREE.js ",
            boxFormat: {
                height:0.12,
                marginLeft:-2
            },
            textFormat: {},
            textColor: "black"
        },
        {
            text: "Databases: MongoDB, PostgresSQL, Django",
            boxFormat: {
                height:0.12,
                marginLeft:-2
            },
            textFormat: {},
            textColor: "black"
        },
        {
            text: "Other: Linus, JSON, Github, VSCode, Trello, Figma",
            boxFormat: {
                height:0.12,
                marginLeft:-2
            },
            textFormat: {},
            textColor: "black"
        },
        {
            text: "Professional Experience",
            boxFormat: {
                height:0.2,
                marginLeft:-2
            },
            textFormat: {fontSize:0.15},
            textColor: "#755500"
        },
        {
            text: "Postbac IRTA, National Institutes of Health (NIH, NINDS) | Bethesda, MD ",
            boxFormat: {
                height:0.1,
                marginLeft:-2
            },
            textFormat: {outlineWidth: 0.002},
            textColor: "black"
        },
        {
            text: "( July 2020 - March 2023 )",
            boxFormat: {
                height:0.15,
                marginLeft:-2
            },
            textFormat: {},
            textColor: "black"
        },
        {
            text: "• Acquisition and processing of 3T and 7T MRI scans for Multiple Sclerosis research in the Translational Neuroradiology Section (TNS)",
            boxFormat: {
                height:0.25,
                marginLeft:-1.8
            },
            textFormat: {maxWidth:3.8},
            textColor: "black"
        },
        {
            text: "• Performed manual and semi-automated segmentation of brain and spine scans using MATLAB, Python, and ITK-SNAP",
            boxFormat: {
                height:0.25,
                marginLeft:-1.8
            },
            textFormat: {maxWidth:3.8},
            textColor: "black"
        },
        {
            text: "• Analysis of disease progression and its relationship with metrics such as lesion burden, type, and location with Excel, SPSS, and R-Studio",
            boxFormat: {
                height:0.25,
                marginLeft:-1.8
            },
            textFormat: {maxWidth:3.8},
            textColor: "black"
        },
        {
            text: "Undergraduate Researcher, VUMC Department of Neurology | Nashville, TN",
            boxFormat: {
                height:0.1,
                marginLeft:-2
            },
            textFormat: {outlineWidth: 0.002},
            textColor: "black"
        },
        {
            text: "( April 2019 - May 2020 )",
            boxFormat: {
                height:0.15,
                marginLeft:-2
            },
            textFormat: {},
            textColor: "black"
        },
        {
            text: "• Applied atrophy network mapping to study and explain patterns of neuron loss in frontotemporal lobar degeneration patients using MATLAB",
            boxFormat: {
                height:0.25,
                marginLeft:-1.8
            },
            textFormat: {maxWidth:3.8},
            textColor: "black"
        },
        {
            text: "Education",
            boxFormat: {
                height:0.2,
                marginLeft:-2
            },
            textFormat: {fontSize:0.15},
            textColor: "#755500"
        },
        {
            text: "General Assembly | Remote",
            boxFormat: {
                height:0.1,
                marginLeft:-2
            },
            textFormat: {outlineWidth: 0.002},
            textColor: "black"
        },
        {
            text: "( May 2023 - August 2023 )",
            boxFormat: {
                height:0.1,
                marginLeft:-2
            },
            textFormat: {},
            textColor: "black"
        },
        {
            text: "• Completing 12-week, immersive coding bootcamp that involves creating 4 front-end, back-end, and full-stack applications in teams and independently",
            boxFormat: {
                height:0.25,
                marginLeft:-1.8
            },
            textFormat: {maxWidth:3.8},
            textColor: "black"
        },
        {
            text: "Vanderbilt University | Nashville, TN",
            boxFormat: {
                height:0.1,
                marginLeft:-2
            },
            textFormat: {outlineWidth: 0.002},
            textColor: "black"
        },
        {
            text: "( August 2016 - May 2020 )",
            boxFormat: {
                height:0.1,
                marginLeft:-2
            },
            textFormat: {},
            textColor: "black"
        },
        {
            text: "Bachelor of Arts in Neuroscience | Minor in Medical Sociology",
            boxFormat: {
                height:0.1,
                marginLeft:-2
            },
            textFormat: {},
            textColor: "black"
        },
        {
            text: "Honors: Cum Laude, Dean’s List",
            boxFormat: {
                height:0.1,
                marginLeft:-2
            },
            textFormat: {},
            textColor: "black"
        },

    ]

    return(
        <group>
            <Flex flexDirection={"column"}>
                {resumeArr.map((line,idx) => (
                    <Box key={idx} leftAnchor {...line.boxFormat}>
                        <Text {...fontProps2D} {...line.textFormat} >
                            {line.text}
                            <meshStandardMaterial color={line.textColor} />
                        </Text>
                    </Box>
                ))}
            </Flex>
            <Text3D {...fontProps3D} scale={0.2} position={[0.6,-3.7,0]} onClick={handleClick}>
                View PDF
                <meshStandardMaterial color={"gold"} metalness={1} roughness={0.07}/>
            </Text3D>
          
        </group>
    )
}