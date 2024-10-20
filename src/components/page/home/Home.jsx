import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import hero1 from '../../media/bgHro2.png'
import './home.css';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Footer from '../../header/Footer';

export default function Home() {
    return (
        <>
            <div className='hero container'>
                <div className="h1">
                    <h1 id='hey'>Hey..' <span>   I, am</span> </h1>
                    <TypeAnimation
                        sequence={['Web Developer', 1000, 'Web Designer', 1000, 'Full Stack Developer', 1000]}
                        style={{ fontSize: '3em', fontWeight: '600', margin: '50px', color: '#d6421c' }}
                        speed={200}
                        repeat={Infinity}
                    />
                    <p>
                        Hey I'am Amit Vishwakarma. And I have 1 & half year experience as a WordPress and PHP Developer. I have created more than many projects in real-world and serve to the client. But now i am switching as a MERN Stack Developer. And I have my own hands own experience in REACT JS, NODE JS, FULL Stack Developer
                    </p>
                </div>
                <div className="h2">
                    <img src={hero1} alt="" />
                </div>
            </div>
            <Section2 />
            <Section3/>
            <Section4/>
            <Footer/>
        </>
    )
}
