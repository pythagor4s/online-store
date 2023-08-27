import React from "react";
import { Link, NavLink } from "react-router-dom"
import logo from "/src/assets/logo.png"

export default function Navbar() {


    const styles = {
        paddingBottom: ".5em",
        borderBottom: "2px solid #e62878",
        fontWeight: 400,
        color: "white",
        marginTop: ".6em"
        
    }
    return(
        <nav>
            <a href="" >
                
                    <img src={logo} className="logo-style" />
                     <h1 className="logo-text">Station</h1>
            </a>
            
            
            <div className="nav-right-side">
                <NavLink className="about" to="." style={({isActive}) => isActive ? styles : null}>About</NavLink>
                <NavLink className="games" to="games" style={({isActive}) => isActive ? styles : null}>Games</NavLink>
                <NavLink className="games" to="tictactoe" style={({isActive}) => isActive ? styles : null}>Free</NavLink>
                <NavLink className="contact" to="contact" style={({isActive}) => isActive ? styles : null}>Contact</NavLink>
                <Link className="sign-in" to="login" >Sign In</Link>
            </div>
        </nav>
    )
}



