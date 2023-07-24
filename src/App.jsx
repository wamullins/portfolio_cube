import './App.css'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useLocation } from "react-router-dom";
import { Display } from './components/Display'

import MouseControlContext from './MouseControlContext';

function App() {

    let location = useLocation().pathname;

    const camSideCor = [
        {
            id: '/',
            x: 4,
            y: 3, 
            z: 24,
        },
       {
            id: '/projects',
            x: 22,
            y: 0, 
            z: 0,
        },
        {
            id: '/resume',
            x: 0,
            y: 0,
            z: -22,
        },
        {
            id: '/aboutme',
            x: -22,
            y: 0,
            z: 0,
        },
        {
            id: '/contactme',
            x: 0,
            y: 22,
            z: 0,
        },
    ]
    
    const cameraStart = camSideCor.find(side => side.id === location)

    const [cameraOnProject, setCameraOnProject] = useState({
        cameraControls: true,
        projectDescription: <></>,
    })

    return (
        <MouseControlContext.Provider value={{cameraOnProject, setCameraOnProject}}>
            <div className="app">
                <Canvas camera={{ position: [cameraStart.x, cameraStart.y, cameraStart.z], fov: 15}}>
                    <Display camSideCor={camSideCor}/>
                </Canvas>
             </div>
        </MouseControlContext.Provider>
        
    )
}

export default App
