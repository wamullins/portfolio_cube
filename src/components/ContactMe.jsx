import { Html, Text } from '@react-three/drei';

export const ContactMe = () => {



    const formStyle = {
        width: "160px",
        height: "90px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    }

    const divStyle = {
        width: "160px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    const fontProps2D = {
        font: '/Amiko-Regular-webfont.woff', 
        fontSize: 0.19,
        maxWidth: 4,
        textAlign: "center",
    }

    const inputStyle = {
        width: "120px",
        fontSize: "8px",
        resize: "none",
    }
    
    const buttonStyle = {
        fontSize: "8px",
        marginTop: "1px",
    }
    

  
  return (
    <group>
        <group position={[0,-0.2,0]}>
            <Html transform occlude> 
                <form action="https://formspree.io/f/xeqboryr" method="POST" style={formStyle}>
                    <input type="email" name="email" style={inputStyle}/>
                    <div className="message-submit-div" style={divStyle}>
                        <textarea name="message" style={{...inputStyle, height: "30px"}}></textarea>
                        <button type="submit" style={buttonStyle}>Send</button>
                    </div>
                </form>
            </Html>
        </group>

        <Text {...fontProps2D} position={[0,1.1,0]}>
            Your Email:
            <meshStandardMaterial color={"white"} />
        </Text>
        <Text {...fontProps2D} position={[0,0.2,0]}>
            Send Me A Message!
            <meshStandardMaterial color={"white"} />
        </Text>
    </group>
    
  );
}



