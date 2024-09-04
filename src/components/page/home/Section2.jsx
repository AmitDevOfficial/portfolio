import React from 'react';
import Build from '../../media/build.png'

export default function Section2() {
  return (
    <div className='container'>
      <div className="secTwo">
        <div className="secTwo1">
            <img src={Build} alt="" />
        </div>
        <div className="secTwo2">
            <h2>WHAT <span>WE</span> BUILD</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,<br/> but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset </p>
        </div>
      </div>
    </div>
  )
}
