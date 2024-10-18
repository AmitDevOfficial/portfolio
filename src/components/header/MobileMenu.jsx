import React, { useState } from 'react';
import './MobileMenu.css';
import logo from "../media/heroDev.png";
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import { Link } from "react-router-dom";

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to close the menu when a link is clicked
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div id="mobileMenu" className="mobile-menu">
            <div className="mobOne">
                <Link to="/" onClick={closeMenu}><img src={logo} alt="Logo" /></Link>
            </div>

            <div className="mobTwo">
                <button className="menu-toggle" onClick={toggleMenu}>
                    <AlignHorizontalLeftIcon fontSize="large" sx={{ color: 'white', marginTop: '-19px' }} />
                </button>

                {menuOpen && (
                    <ul className="menu-items">
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MobileMenu;
