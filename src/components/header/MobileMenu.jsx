import React, { useState } from 'react';
import './MobileMenu.css';
import logo from "../media/heroDev.png";
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import {Link}  from "react-router-dom";

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div id="mobileMenu" className="mobile-menu">

            <div className="mobOne">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>

            <div className="mobTwo">
                
                <button className="menu-toggle" onClick={toggleMenu}>
                <AlignHorizontalLeftIcon fontSize="large" sx={{ color: 'white', marginTop: '-19px' }} />
                </button>

                {menuOpen && (
                    <ul className="menu-items">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                )}
            </div>



        </div>
    );
};

export default MobileMenu;
