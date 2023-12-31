import React from "react";
import { Link } from "react-router-dom"

export default function Login() {

    function handleSubmit(event) {
        event.preventDefault()
    }

    return(
        <div>
             <div className="form-container">
                <div className="signup">
                    <h1 className="sign-title">Create Account</h1>
                    <p className="sign-desc">Make a account and get exclusive deals, free weekly trials, and access to our monthly rafles and giveaways</p>
                </div>
            <form className="form" onSubmit={handleSubmit}>
                {<input 
                    type="text" 
                    placeholder="Username"
                    className="form--input"
                />}
                {<input 
                    type="text" 
                    placeholder="Email address"
                    className="form--input"
                />}
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                />
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Create Account
                </button>
                <p className="have-account">Already have an account?</p>
                <Link to="../sign" 
                    className="form--submit2"
                >
                    Sign In
                </Link>
            </form>
            </div>
        </div>
    )
}