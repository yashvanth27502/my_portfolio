import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/Home Banner.png";

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Yashvanth</div>
              <div className="staticTitle">
                Graphic
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                
                <li><span>Designer</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/yashvanth-rv" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
        </div>
        <div className="mask">
            <img className='bg' src={cartoon} alt="girl-with-laptop" />
        </div>
    </div>
  )
}
