import './App.css'
import { useState } from 'react'
import { useLocation } from "react-router-dom";
import CubeContext from './CubeContext'
import { Display } from './components/Display'
import { Nav } from "./components/Nav"


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

    const [cubeInfo, setCubeInfo] = useState({
        cameraLocation: [5,3,15],
        startLocation: cameraPos,
      })



    return (
        <div className="app">
            <CubeContext.Provider value={{ cubeInfo, setCubeInfo}}>
                <Nav />
                <Display />
            </CubeContext.Provider>
        </div>
    )
}

export default App
