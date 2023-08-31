import React from "react";

export default function About() {

    function handleSubmit(event) {
        event.preventDefault()
    }

    function messageSent() {
        alert("Message sent sucessfully")
    }
    
    return(
        <div className="contact-holder">
            <h1 className="contact-title">CONTACT</h1>
            <p className="contact-title-des">Have a question?</p>
        <div className="contact-wrapper">
            
            
           <div>
            <h2 className="contact-header2">U.S. | TUNE</h2>
            <p className="contact-desc">11350 McCormick Rd, EP III, Suite 200,
Hunt Valley, MD 21031</p>
            <h2 className="contact-styled-h">Billing Inquiries</h2>
            <p className="contact-desc">(855) 979-7887</p>
            <h2 className="contact-styled-h">Information and Sales</h2>
            <p className="contact-desc">exosolutionsprov@onhalt.com</p>
            <h2 className="contact-styled-h">Support</h2>
            <p className="contact-desc">support@gamestation.com</p>
           </div>
           <div className="contact-form-container">
           <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="First Name"
                    className="form--input"
                />
                <input 
                    type="text" 
                    placeholder="Last Name"
                    className="form--input"
                />
                <input 
                    type="email" 
                    placeholder="Personal Email"
                    className="form--input"
                />
                <input 
                    type="email" 
                    placeholder="Company Email"
                    className="form--input"
                />
                <textarea 
                    type="textarea" 
                    placeholder="Your question goes here"
                    className="textareaform"
                />
                
                <div className="form--marketing">
                    {/* <input
                        id="okayToEmail"
                        type="checkbox"
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label> */}
                </div>
                <button 
                    className="form--submit"
                    onClick={() => messageSent()}
                >
                    SEND MESSAGE
                </button>
            </form>
           </div>
        </div>
        </div>
    )
}