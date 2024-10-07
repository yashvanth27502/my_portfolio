import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/Profile pic.jpg";

export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
        <div className="aboutMe-text">
          <h3>Hey there, 👋</h3>
          I'm <span> Yashvanth </span>, a final-year student pursuing B.E in CSE from Bengaluru, India. With <span>1 year</span> of professional experience in the design field, I specialize in crafting intuitive and visually striking graphic and UI/UX designs. I focus on delivering seamless user experiences and compelling visuals that communicate effectively.
          <br/> <br/>
          Proficient in industry-standard tools like<span> Figma, Photoshop, Illustrator, and Canva,</span> I can create designs that not only look great but are also user-centric and functional. Beyond design, I’m always open to learning and exploring new trends in the design and technology landscape. Let's collaborate and create impactful digital experiences together!
          When I'm not designing, I love exploring my creative side through sketching and painting, allowing me to relax and innovate in different ways. Want to know more? Feel free to Explore Me!
          <a className='btn' href="https://drive.google.com/file/d/17Yn2yHugWOtUklaNilL76oF3ZC_AH9D2/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download My Resume</a>
        </div>
        
        <div className="profile-photo">
          <div className="heading"> About Me</div>
          <img className="img" src={myProfile} alt="Profile"></img>
        </div>
        <div className="name">Yash</div>
      </div>
  );
}
