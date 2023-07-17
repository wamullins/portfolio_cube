import './App.css'
import { Suspense  } from 'react'
import { Canvas } from '@react-three/fiber'
import { Display } from '../components/Display'
import { Nav } from "../components/Nav"
import { useLocation } from "react-router-dom";


function App() {

    let location = useLocation().pathname;
    console.log(location);

    let cameraPos = [5,3,15]

    if (location === "/") {
        cameraPos = [5,3,15]
        console.log("i'm home");
    } else if (location === "/projects") {
        cameraPos = [15,0,0]
    }
        

    return (
        <div className="app">
            <Nav />
            <Canvas camera={{ position: cameraPos, fov: 20}}>
                <Suspense fallback={null}>
                    <Display />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default App
