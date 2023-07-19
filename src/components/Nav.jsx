import { NavLink } from 'react-router-dom'

import { useContext } from 'react';

export const Nav = () => {




    const handleClick = (cor) => {
        // setCubeInfo({...cubeInfo, cameraLocation: cor})
        console.log(`setting ${cor}`)
      };

    return (
        <>
        </>
        // <div className="nav-links">
        //     <NavLink to="/" cor={camSideCor.home} onClick={()=> handleClick(camSideCor.home)} >Home</NavLink>
        //     <NavLink to="/projects" cor={camSideCor.projects} onClick={()=> handleClick(camSideCor.projects)}>Projects</NavLink>
        //     <NavLink to="/resume">Resume</NavLink>
        //     <NavLink to="/aboutme">About Me</NavLink>
        // </div>
    )
}