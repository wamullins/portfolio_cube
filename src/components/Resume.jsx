import { Text, Text3D} from "@react-three/drei"
import { Flex, Box } from '@react-three/flex'
export const Resume = () => {

    const fontProps2D = {
        font: '/Amiko-Regular-webfont.woff', 
        fontSize: 0.11,
        maxWidth: 3.8,
        textAlign: "left",
    }

    const fontProps3D = { 
        font:'/Inter_Bold.json',
        letterSpacing: -0.06,
        height: .2,

    }

    const handleClick = () => {
        return 
    }

    return(
        <group>
            <Flex flexDirection={"column"}>
                <Box centerAnchor width={0} height={0.3} >
                    <Text {...fontProps2D} >
                        Skills
                        <meshStandardMaterial color={"gold"} />
                    </Text>
                </Box>
                <Box centerAnchor width={0} height={0.3} >
                    <Text {...fontProps2D} >
                        Languages:  JavaScript, HTML5, CSS3,  MATLAB, Python | Libraries and Frameworks: Express.js, React.js, Node.js, JQuery | Databases: MongoDB, PostgresSQL | Other: Linus, JSON, Github, VSCode, Trello, Figma
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box>
                <Box centerAnchor width={0} height={0.4} >
                    <Text {...fontProps2D}>
                        Professional Experience
                        <meshStandardMaterial color={"gold"} />
                    </Text>
                </Box>
                <Box centerAnchor width={0} height={1.1} >
                    <Text {...fontProps2D}>
                        Postbac IRTA, National Institute of Neurological Disorders and Stroke (NINDS, NIH) | 
                        Bethesda, MD July 2020 - March 2023
                        Acquisition and processing of 3T and 7T MRI scans for Multiple Sclerosis research in the Translational Neuroradiology Section (TNS) 
                        Performed manual and semi-automated segmentation of brain and spine scans using MATLAB, Python, and ITK-SNAP
                        Analysis of disease progression and its relationship with metrics such as lesion burden, type, and location with Excel, SPSS, and R-Studio
                        Undergraduate Researcher, VUMC Department of Neurology | Nashville, TN	April 2019 - May 2020
                        Applied atrophy network mapping to study and explain patterns of neuron loss in frontotemporal lobar degeneration patients using MATLAB
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box>
                <Box centerAnchor width={0} height={.5}>
                    <Text {...fontProps2D}>
                        Education
                        <meshStandardMaterial color={"gold"} />
                    </Text>
                </Box>
                <Box centerAnchor width={0} height={.5}>
                    <Text {...fontProps2D}>
                        General Assembly | Remote	May 2023 - August 2023(expected)
                        Completing 12-week, immersive coding bootcamp that involves creating 4 front-end, back-end, and full-stack applications in teams and independently
                        Vanderbilt University | Nashville, TN 	August 2016 - May 2020
                        Bachelor of Arts in Neuroscience | Minor in Medical Sociology	
                        Honors: Cum Laude, Dean’s List
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box>
            </Flex>

            <Text3D {...fontProps3D} scale={0.2} position={[0.6,-3.8,0]} onClick={handleClick}>
                Download
                <meshStandardMaterial color={"gold"} metalness={1} roughness={0.07}/>
            </Text3D>
           
            {/* <Flex flexDirection={"column"} alignItems={"center"} >
                <Box centerAnchor height={1} width={0} alignItems={"flex-start"}>
                    
                </Box >
                <Box centerAnchor height={1} width={0}>
                    <Text {...fontProps2D}>
                        Languages:  JavaScript, HTML5, CSS3,  MATLAB, Python | Libraries and Frameworks: Express.js, React.js, Node.js, JQuery | Databases: MongoDB, PostgresSQL | Other: Linus, JSON, Github, VSCode, Trello, Figma
                        <meshStandardMaterial color={"black"} />
                    </Text>
                </Box> 
            </Flex> */}
           
            
            {/* <div className="resume-div" style={divStyle}>
                <div className="resume-section-title" style={titleStyle}>Skills</div>
                <div className="resume-section-text" style={infoStyle}>
                    Languages:  JavaScript, HTML5, CSS3,  MATLAB, Python | Libraries and Frameworks: Express.js, React.js, Node.js, JQuery | Databases: MongoDB, PostgresSQL | Other: Linus, JSON, Github, VSCode, Trello, Figma
                </div>
                <div className="resume-section-title" style={titleStyle}>Professional Experience</div>
                <div className="resume-section-text" style={infoStyle}>
                    Postbac IRTA, National Institute of Neurological Disorders and Stroke (NINDS, NIH) | 
                    Bethesda, MD July 2020 - March 2023
                    Acquisition and processing of 3T and 7T MRI scans for Multiple Sclerosis research in the Translational Neuroradiology Section (TNS) 
                    Performed manual and semi-automated segmentation of brain and spine scans using MATLAB, Python, and ITK-SNAP
                    Analysis of disease progression and its relationship with metrics such as lesion burden, type, and location with Excel, SPSS, and R-Studio
                    Undergraduate Researcher, VUMC Department of Neurology | Nashville, TN	April 2019 - May 2020
                    Applied atrophy network mapping to study and explain patterns of neuron loss in frontotemporal lobar degeneration patients using MATLAB
                </div>
                <div className="resume-section-title" style={titleStyle}>Research</div>
                <div className="resume-section-text" style={infoStyle}>
                    Cortical lesion burden is associated with worsening disability over time and conversion to progressive MS Feb. 25 2022 
                    Talk Presented at the American Committee for Treatment and Research in Multiple Sclerosis (ACTRIMS) Forum
                </div>
                <div className="resume-section-title" style={titleStyle}>Education</div>
                <div className="resume-section-text" style={infoStyle}>
                    General Assembly | Remote	May 2023 - August 2023(expected)
                    Completing 12-week, immersive coding bootcamp that involves creating 4 front-end, back-end, and full-stack applications in teams and independently
                    Vanderbilt University | Nashville, TN 	August 2016 - May 2020
                    Bachelor of Arts in Neuroscience | Minor in Medical Sociology	
                    Honors: Cum Laude, Dean’s List
                </div>
            </div> */}
        </group>
    )
}