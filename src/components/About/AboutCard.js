import React from 'react';
import './About.css';

const AboutCard = ({icon, heading, text}) => {
  return (
    <>
    <div className='icon-container'>
        {icon}
    </div>
    <h3>{heading}</h3>
    <p>{text}</p>
    </>
  )
}

export default AboutCard