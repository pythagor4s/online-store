import React from "react";
import { Link } from "react-router-dom"

export default function About() {
    return(
        <div>
            <div className="about-wrapper">
            <h1 className="hero-name-1">Unleash the Legends</h1>
                <h2 className="hero-name-2">Your Gateway to Gaming Heroes!</h2>
                
                
                    <div className="hero-container">
                        <img className="hero-image" src="/src/assets/hero.jpg" />
                        <div className="hero-description">Welcome to the beating heart of gaming prowess, the Hero Page. Dive into a universe where pixels transform into extraordinary heroes and epic sagas await your command. From nostalgic icons to modern marvels, discover characters that define generations. Rent or own, the choice is yours. Level up your gaming experience with GameStation, where heroes come alive!</div>
                        <Link to="store" className="button">Visit the store</Link>
                    </div> 
                    
            </div>
        </div>
    )
}