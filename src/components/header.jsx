import React from "react";
import {FaFacebook, FaEnvelope, FaInstagram} from "react-icons/fa";
import { NavLink } from "react-router-dom";


function Header(){
    const base = "relative after:block after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all";
    
    return (
        <div class="flex flex-col sm:flex-row justify-between items-center font-mono">
            <div className="flex justify-center items-center hidden sm:block">
                <ul className="flex items-center p-2 gap-8 font-bold">
                    <li>
                        <NavLink to="/" end className={({ isActive }) => isActive ? base + " after:w-full" : base}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? base + " after:w-full" : base}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume" className={({ isActive }) => isActive ? base + " after:w-full" : base}>Resume</NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex items-center justify-center">
                <h2 className="font-bold">Freiden Duliente's Portfolio</h2>
            </div>

            <div className="flex items-center justify-center hidden sm:block">
                <ul className="flex items-center justify-center p-2 gap-8">
                    <li>
                        <a href=""><FaFacebook className="h-[25px] w-[25px]"/></a>
                    </li>
                    <li>
                        <a href=""><FaEnvelope className="h-[25px] w-[25px]"/></a>
                    </li>
                    <li>
                        <a href=""><FaInstagram className="h-[25px] w-[25px]"/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;