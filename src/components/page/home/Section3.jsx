import React from 'react';
import clinet1 from '../../media/client1.png';
import clinet2 from '../../media/clinet2.png';
import me1 from '../../media/me1.png';
import me3 from '../../media/me3.png';
import bgDesk from '../../media/bgDesk.png';
import react from '../../media/bgReact.png';
import node from '../../media/bgNode.png';
import express from '../../media/bgExpress.png';
import mongo from '../../media/bgMongo.png';

export default function Section3() {
  return (
    <div id='ourProcess'>
      <h2>OUR STRATEGY</h2>
      <div className="process">
        <img src={clinet1} alt="" />
        <hr />
        <img src={me1} alt="" />
        <hr />
        <img src={bgDesk} alt="" />
      </div>
      <hr className='verHr'/>
      <div className="processOne">
        <img src={mongo} alt="" />
        <hr />
        <img src={express} alt="" />
        <hr />
        <img src={node} alt="" />
        <hr />
        <img src={react} alt="" />
      </div>
      <hr className='verHr2'/>
      <div className="process processthird">
        <img src={me3} alt="" />
        <hr />
        <img src={bgDesk} alt="" />
        <hr />
        <img src={clinet2} alt="" />
      </div>
    </div>
  )
}
