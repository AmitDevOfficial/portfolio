import React from 'react';
import Footer from '../../header/Footer';
import './skill.css';
import html from '../../media/html.png';
import css from '../../media/css.png';
import js from '../../media/js.png';
import boot from '../../media/bootstap.png';
import react from '../../media/react.png';
import node from '../../media/node.png';
import express from '../../media/express.png';
import mongo from '../../media/mongo.png';
import mui from '../../media/mui.png';
import php from '../../media/php.png';
import wdp from '../../media/wdp.png';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


export default function Skill() {
  return (
    <>
      <div id="skill" className='container'>
        <h1>SKILLS</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
      </div>
      <div className='tech skillContainer'>
        <h3>TECHNICAL SKILLS</h3>
          <div className='techskill'>
            <span className='html'>HTML</span>
            <hr />
            <img src={html} alt="" />
            <hr />
            <span className='progress'><AppRegistrationIcon/></span>
          </div>
          <hr className='lineRotate' />
          <div id="tech2" className='techskill'>
            <span className='css'>CSS</span>
            <hr />
            <img src={css} alt="" />
            <hr />
            <span className='progress'><AppRegistrationIcon/></span>
          </div>
          <hr className='lineRotate' />
          <div id="tech2" className='techskill'>
            <span className='java'>JAVASCRIPT</span>
            <hr />
            <img src={js} alt="" />
            <hr />
            <span className='progress'><AppRegistrationIcon/></span>
          </div>
          <hr className='lineRotate' />
          <div id="tech2" className='techskill'>
            <span className='boot'>BOOTSTRAP</span>
            <hr />
            <img src={boot} alt="" />
            <hr />
            <span className='progress'><AppRegistrationIcon/></span>
          </div>
          <hr className='lineRotate' />
          <div id="tech2" className='techskill'>
            <span className='react'>REACT JS</span>
            <hr />
            <img src={react} alt="" />
            <hr />
            <span className='progress'><AppRegistrationIcon/></span>
          </div>
          <hr className='lineRotate' />
          <div id="tech2" className='techskill'>
            <span className='node'>NODE JS</span>
            <hr />
            <img src={node} alt="" />
            <hr />
            <span className='progress'><AppRegistrationIcon/></span>
          </div>
          <hr className='lineRotate' />
          <div id="tech2" className='techskill'>
            <span className='express'>EXPRESS JS</span>
            <hr />
            <img src={express} alt="" />
            <hr />
            <span className='progress'><AppRegistrationIcon/></span>
          </div>
          <hr className='lineRotate' />
          <div id="tech2" className='techskill'>
            <span className='mongo'>MONGODB</span>
            <hr />
            <img src={mongo} alt="" />
            <hr />
            <span className='progress'><AppRegistrationIcon/></span>
          </div>
          <hr className='lineRotate' />
          <div id="tech2" className='techskill'>
            <span className='mui'>MATERIAL UI</span>
            <hr />
            <img src={mui} alt="" />
            <hr />
            <span className='progress'><AppRegistrationIcon /></span>
          </div>
          <hr className='lineRotate' />
          <div id="tech2" className='techskill'>
            <span className='php'>PHP</span>
            <hr />
            <img src={php} alt="" />
            <hr />
            <span className='progress'><AppRegistrationIcon /></span>
          </div>
          <hr className='lineRotate' />
          <div id="tech2" className='techskill'>
            <span className='wdp'>WORDPRESS</span>
            <hr />
            <img src={wdp} alt="" />
            <hr />
            <span className='progress'><AppRegistrationIcon /></span>
          </div>
      </div>
      <Footer />
    </>

  )
}
