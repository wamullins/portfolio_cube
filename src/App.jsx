import './App.css'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useLocation } from "react-router-dom";
import { Display } from './components/Display'


function App() {

    let location = useLocation().pathname;

    const camSideCor = [
        {
            id: '/',
            x: 4,
            y: 3, 
            z: 15,
        },
       {
            id: '/projects',
            x: 15,
            y: 3, 
            z: -4,
        },
        {
            id: '/resume',
            x: -4,
            y: 3,
            z: -15,
        },
        {
            id: '/aboutme',
            x: -15,
            y: 3,
            z: 4,
        }
    ]
    
    const cameraStart = camSideCor.find(side => side.id === location)

    return (
        <div className="app">
            <Canvas camera={{ position: [cameraStart.x, cameraStart.y, cameraStart.z], fov: 20}}>
                <Display camSideCor={camSideCor}/>
            </Canvas>
                
        </div>
    )
}

export default App
