import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';


export default function Footer() {
    return(
        <>
            <div className="footerel">
                <div className="footer-icons">
                <a href="https://www.google.com/" target="_blank">{<FaFacebookF />}</a>
                <a href="https://www.google.com/" target="_blank">{<FaTwitter />}</a>
                <a href="https://www.google.com/" target="_blank">{<FaYoutube />}</a>
                <a href="https://www.google.com/" target="_blank">{<FaInstagram />}</a>
                <a href="https://www.google.com/" target="_blank">{<FaTiktok />}</a>
                </div>
                <p className="first">Copyright @2023 Pitagora Dev.studio | All Rights Reserved || Terms of Use & Privacy Policy</p>
                <p className="second">2000 Iztokova Ulica Maribor (069 759 / 976) || (59936 295 23)</p>
            </div>
        </>
        
    )
}