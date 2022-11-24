import React from "react"
import { useState } from "react";
import {FaBars,FaTimes } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../Photo/logo.png"

const Navbar = () => {


    return(
        <>
        <nav className='navar'>
            <div className="navcontanier">
                <Link to="/" className="nav-logo">
                <img src={logo} alt="" width="250"/>
                </Link>
                <div className='navbar-contain'>
                <ul>
                    <li><a href="/" className="nav-btn">Home</a></li>
                    <li><a href="/Sign" className="nav-btn">SIGN UP</a></li>
                    <li><a href="/Login"  className="nav-btn">LOGIN</a></li>
                    <a href=""  class="icons"><FaBars/></a>
                </ul>
                
                </div>

            </div>
        </nav>

    </>
    )
}

export default Navbar;