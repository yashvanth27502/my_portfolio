import React from 'react'
import "./SkillCardStyle.css";
import { CgCPlusPlus } from "react-icons/cg";
import {DiGit} from "react-icons/di";
import {SiAdobeillustrator, SiAdobexd, SiReactrouter, SiBootstrap, SiFigma, SiAdobephotoshop, SiCanva, SiAdobeaftereffects } from "react-icons/si";
import {TbBrandCss3, TbBrandJavascript, TbBrandHtml5} from "react-icons/tb";
import {IoLogoWindows, IoLogoNpm} from "react-icons/io"

export default function SkillCard({id}) {
  return (
    <>
        <div className="skill-container" id = {id}>
          <div className="skill-header">My Skills</div>
          <div className="skill-box">
            <div className="skillset">
              <abbr title='Visual Studio Code'><SiAdobeillustrator className='techLogo'/></abbr>
              <abbr title='Windows'><SiAdobexd className='techLogo'/></abbr>
              <abbr title='Figma'><SiFigma className='techLogo'/></abbr>
              <abbr title='Inkscape'><SiAdobephotoshop className='techLogo'/></abbr>
              <abbr title='Inkscape'><SiCanva className='techLogo'/></abbr>
              <abbr title='Inkscape'><SiAdobeaftereffects className='techLogo'/></abbr>
              <abbr title='Inkscape'><SiCanva className='techLogo'/></abbr>
            </div>            
          </div>
        </div>
    </>

  )
}
