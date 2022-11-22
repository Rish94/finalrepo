import React from 'react'
import {FaUserAlt} from 'react-icons/fa';
import '../CSS/navbar.css';



export default function Navbar() {
    return (
        <>
          
                <div class="navbar">
                    <div id="logo">
                        <span id="headingnav">MARUTI SUZUKI</span>
                    </div>
                    <div id="menu">
                        <a href="/" id="content">Home</a>
                        <a href="/about" id="content">About</a>
                        <a href="/services" id="content">Services</a>
                        <a href="/contact" id="content">Contact</a>
                        <a href="/contact" id="content">Reviews</a>
                    </div>
                    <div id="content">
                        <FaUserAlt/>
                    </div>
                </div>
        </>
    );
}



