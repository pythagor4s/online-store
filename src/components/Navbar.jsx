import React from "react";
import { Link, NavLink } from "react-router-dom"
import logo from "/src/assets/logo.png"

export default function Navbar() {


    /* const styles = {
        paddingBottom: ".5em",
        borderBottom: "2px solid #e62878",
        fontWeight: 400,
        color: "white",
        marginTop: ".6em",
        position: "relative"
        
    } */
    return(
        <nav>
            <a href="" >
                
                    <img src={logo} className="logo-style" />
                     <h1 className="logo-text">Station</h1>
            </a>
            
            
            <div className="nav-right-side">
                <NavLink className={({isActive}) => isActive ? "navigationnn" : "navigation"} to="." >Home</NavLink>
                <NavLink className={({isActive}) => isActive ? "navigationnn" : "navigation"} to="games" >Store</NavLink>
                <NavLink className={({isActive}) => isActive ? "navigationnn" : "navigation"} to="tictactoe" >Free</NavLink>
                <NavLink className={({isActive}) => isActive ? "navigationnn" : "navigation"} to="contact" >Contact</NavLink>
                <NavLink className={({isActive}) => isActive ? "navigationnn" : "navigation"} to="" >About</NavLink>
                <Link className="sign-in" to="login" >Sign In</Link>
            </div>
        </nav>
    )
}



