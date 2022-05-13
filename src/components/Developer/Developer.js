import React from 'react';
import './Developer.css';
import imgTerminal from '../../assets/terminal.png';

const Developer = () => {
  return (
    <div className='developers'>
        <div className="container">
            <div className="left">
                <h2>Superpowers for DEFI developers.</h2>
                <p>Checkout the <span className="blue">documentation</span>, the <span className="blue">quick start</span> or a guide below integrate your project with thousands of token billions of liquidity.</p>
            </div>
            <div className="right">
                <div className="img-container">
                    <img src={imgTerminal} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Developer