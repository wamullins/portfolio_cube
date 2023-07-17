import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/aboutme">About Me</NavLink>
        </div>
    )
}