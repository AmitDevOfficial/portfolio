import React from 'react';
import logo from '../media/heroDev.png';
import './Header.css';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import { useState } from 'react';
import '../css/global.css';
import {Link}  from "react-router-dom";

export default function Header() {

  const [isDay, setIsDay] = useState('light');


  const handleIconClick = () => {

    if (isDay === 'light') {
      setIsDay('dark');
      document.querySelector("body").setAttribute("data-theme", "dark")
      document.body.style.color = "white";
    } else {
      setIsDay('light');
      document.querySelector("body").setAttribute("data-theme", "light")
      document.body.style.color = "black";
    }

  }
  return (
    <header className='desktop-menu'>
      <div className="main">
        <div className="one">
          <li><Link to="/"> <img src={logo} alt="" /> </Link></li>
        </div>
        <div className="two">

          <ul>
            <div onClick={handleIconClick}> {isDay === 'light' ? <NightsStayOutlinedIcon /> : <WbSunnyOutlinedIcon />}</div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
