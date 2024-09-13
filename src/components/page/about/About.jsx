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
          <p>Now I'am <b>Switching</b> as a <b>MERN Stack Developer</b>, I have done work hard with this role and i have my own Experience in MERN Stack. I have created my own projects in MERN Stack</p>
          <p>If you want to hire me : <br/>Than please feel free to contact with me</p>
          <p><b>CONTACT NUMBER:</b> <br />+91 7974743671</p>

       </div>
      </div>

      <div className='edu container'>
        <h3>Educational Journey</h3>
        <div className="eduMain">
        <div className="eduOne">
          <div className="eduInfo">
          <p><b>10th Higher Secondary</b></p>
          <ul>
            <li>School for Excellence Dewas (Madhya Pradesh)</li>
            <li><b>(2011 - 2012)</b></li>
          </ul>
          </div>
          <div className="eduInfo">
          <p><b>12th Higher Secondary</b></p>
          <ul>
            <li>SVM (Madhya Pradesh)</li>
            <li><b>(2014 - 2015)</b></li>
          </ul>
          </div>
          
          <div className="eduInfo">
          <p><b>Presitge Institute of Mangament Dewas (Madhya Pradesh)</b></p>
          <ul>
            <li>Bachelor of Computer Application (BCA)</li>
            <li><b>(2019 - 2022)</b></li>
          </ul>
          </div>

          <div className="eduInfo">
          <p><b>Sage University Indore (Madhya Pradesh)</b></p>
          <ul>
            <li>Master's of Computer Application (MCA)</li>
            <li><b>(2022 - 2024)</b></li>
          </ul>
          </div>
          
        </div>
        <div className="eduTwo">

        </div>
        </div>
      </div>

      <h1><center>work in progress</center></h1>
      <Footer/>
    </>

  )
}
