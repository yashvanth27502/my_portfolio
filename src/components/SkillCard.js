import React from 'react';
import "./SkillCardStyle.css";
import { SiAdobeillustrator, SiAdobexd, SiFigma, SiAdobephotoshop, SiCanva, SiAdobeaftereffects } from "react-icons/si";

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>
        <div className="skill-box">
          <div className="skillset">
            <abbr title='Adobe Illustrator'><SiAdobeillustrator className='techLogo' /></abbr>
            <abbr title='Adobe XD'><SiAdobexd className='techLogo' /></abbr>
            <abbr title='Figma'><SiFigma className='techLogo' /></abbr>
            <abbr title='Adobe Photoshop'><SiAdobephotoshop className='techLogo' /></abbr>
            <abbr title='Canva'><SiCanva className='techLogo' /></abbr>
            <abbr title='Adobe After Effects'><SiAdobeaftereffects className='techLogo' /></abbr>          
          </div>
        </div>
      </div>
    </>
  );
}
