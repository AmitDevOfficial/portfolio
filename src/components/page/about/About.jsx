import React from 'react';
import Footer from '../../header/Footer';
import proImg from "../../media/proImg.jpeg";
import './about.css';

export default function About() {
  return (
    <>
      <div className='mainAbout container'>
       <div className='aboutOne'>
          <img src={proImg} alt="" />
       </div>
       <div className='aboutTwo'>
          <h3>About US</h3>
          <p>Hey I'am <b>Amit Vishwakarma</b> and i am from <b>Dewas (Madhya Pradesh)</b>. I have <b>1 & half year Experience</b> as a <b>WordPress and PHP Developer</b>. And i have created more than Projects in my Professional journey and serve the projects to the clients.<br/><br/> I have expertise in <b>WooCommerce website E-Commerce webiste, Informational Website</b> and many more Projects i created</p>
          <p>Now I'am Switching as a <b>MERN Stack Developer</b>, I have done work hard with this role and i have my own Experience in MERN Stack. I have created my own projects in MERN Stack</p>
          <p>If you want to hire me : <br/>Than please feel free to contact with me</p>
          <p><b>CONTACT NUMBER:</b> <br />+91 7974743671</p>

       </div>
      </div>
      <Footer/>
    </>

  )
}
