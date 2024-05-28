import React from 'react';
import * as S from "./styles"

import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa6';

const Skills: React.FC = () => {
  return (
    <S.ContainerSkills id='Skills'>
        <S.SkillsIcon>
          <FaCss3Alt className='icon' />
          <FaHtml5 className='icon' />
          <FaJs className='icon' />
          <FaReact className='icon' />
        </S.SkillsIcon>
        <S.SkillDescription>
          <h1>HTML</h1>
          <span>html is a language of programme</span>
        </S.SkillDescription>
    </S.ContainerSkills>
  );
}

export default Skills;