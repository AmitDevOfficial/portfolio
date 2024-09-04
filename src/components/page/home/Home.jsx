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
                    <h1>Hey..' <span>   I, am</span> </h1>
                    <TypeAnimation
                        sequence={['Web Developer', 1000, 'Web Designer', 1000, 'Full Stack Developer', 1000]}
                        style={{ fontSize: '3em', fontWeight: '600', margin: '50px', color: '#d6421c' }}
                        speed={200}
                        repeat={Infinity}
                    />
                    <p>
                        Websites have come a long way from what they used to be a decade ago. We started with plain HTML and CSS websites. Then came JavaScript and revolutionized the way the web works. From that point onward, web technologies
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
