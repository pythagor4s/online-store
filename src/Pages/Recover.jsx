import React from "react";

export default function Recover() {

    function handleSubmit(event) {
        event.preventDefault()
    }

    function sentmail() {
        alert("Recovery code sent!")
    }

    return(
        <div>
             <div className="form-container">
                <div className="signup">
                    <h1 className="sign-title">Sign In</h1>
                    <p className="sign-desc">A link will be sent to your email address. If the email isn't visible in your inbox try checking the spam folder or some shit.</p>
                </div>
            <form className="form" onSubmit={handleSubmit}>
                {<input 
                    type="email" 
                    placeholder="Email"
                    className="form--input"
                />}
                
               
                
                
                <button onClick={() => sentmail()} 
                    className="form--submit2"
                >
                    Recover Account
                </button>

            </form>
            </div>
        </div>
    )
}