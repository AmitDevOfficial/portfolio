import React, { useState } from 'react';
import './MobileMenu.css';
import logo from "../media/heroDev.png";
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div id="mobileMenu" className="mobile-menu">

            <div className="mobOne">
                <img src={logo} alt="" />
            </div>

            <div className="mobTwo">
                
                <button className="menu-toggle" onClick={toggleMenu}>
                <AlignHorizontalLeftIcon />
                </button>

                {menuOpen && (
                    <ul className="menu-items">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                )}
            </div>



        </div>
    );
};

export default MobileMenu;
