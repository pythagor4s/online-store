import React from "react";
import { Link } from "react-router-dom"

export default function SignIn() {
    function handleSubmit(event) {
        event.preventDefault()
    }

    return(
        <div>
             <div className="form-container">
                <div className="signup">
                    <h1 className="sign-title">Sign In</h1>
                    <p className="sign-desc">Sign in and get exclusive deals, free weekly trials, and access to our monthly rafles and giveaways</p>
                </div>
            <form className="form" onSubmit={handleSubmit}>
                {<input 
                    type="text" 
                    placeholder="Username"
                    className="form--input"
                />}
                
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                />
               
                
                
                <button 
                    className="form--submit2"
                >
                    Sign In
                </button>
                <Link className="forgot-pas" to="../recover">Forrgot password?</Link>
            </form>
            </div>
        </div>
    )
}