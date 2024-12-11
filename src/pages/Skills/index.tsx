import React from 'react';
import * as S from "./styles"

import { SiAdobephotoshop, SiCss3, SiFigma, SiHtml5, SiJavascript, SiLaravel, SiReact, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Skills: React.FC = () => {
  return (
    <S.ContainerSkills id='Skills'>
      <h1>Habilidades</h1>
      <S.SkillsIcon>
        <SiHtml5 className='icon' />
        <SiCss3  className='icon' />
        <SiJavascript  className='icon' />
        <SiTypescript  className='icon' />
        <SiReact className='icon' />
        <SiStyledcomponents className='icon' />
        <SiLaravel className='icon' />
        <SiTailwindcss className='icon' />
        <SiAdobephotoshop className='icon' />
        <SiFigma className='icon' />
      </S.SkillsIcon>
    </S.ContainerSkills>
  );
}

export default Skills;