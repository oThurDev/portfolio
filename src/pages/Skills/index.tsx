import React from 'react';
import * as S from "./styles"

import ProgrammerImg from "../../assets/code.png"
import DesingImg from "../../assets/desing.png"
import SoftImg from "../../assets/softskills.png"

import { PiCodeBold, PiPaletteBold, PiPersonArmsSpreadBold } from 'react-icons/pi';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <S.ContainerSkills id='Skills'>
      <h1>Minhas Skills</h1> 
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
      > 
        <S.SkillsCard>
            <S.ProgrammerSkills>
              <S.ImgsCard src={ProgrammerImg} />
              <PiCodeBold className='icon' />
              <h2>Desenvolvedor Front-End</h2>
              <h3>Linguagens de Programação: </h3>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>PHP</li>
              </ul>
              <h3>Frameworks: </h3>
              <ul>
                <li>React Js</li>
                <li>Laravel</li>
              </ul>
              <h3>Ferramentas e Tecnologias</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>APIs</li>
                <li>Tailwind CSS</li>
                <li>Styled-Components</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>SEO</li>
              </ul>
            </S.ProgrammerSkills>
            <S.DesignSkills>
              <S.ImgsCard src={DesingImg} />
              <PiPaletteBold className='icon' />
              <h2>Design Grafico</h2>
              <h3>Softwares: </h3>
              <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Figma</li>
              </ul>
              <h3>Habilidades: </h3>
              <ul>
                <li>Criação de Logos</li>
                <li>Criação de Artes</li>
                <li>Criação de Estampas</li>
              </ul>
            </S.DesignSkills>
            <S.SoftSkills>
              <S.ImgsCard src={SoftImg} />
              <PiPersonArmsSpreadBold className='icon' />
              <h2>Soft Skills</h2>
              <ul>
                <li>Dedicado</li>
                <li>Criativo</li>
                <li>Responsável</li>
                <li>Organizado</li>
                <li>Inteligente</li>
                <li>Dinâmico</li>
                <li>Focado</li>
                <li>Trabalho em Equipe</li>
                <li>Empatia</li>
                <li>Resolução de Problemas</li>
              </ul>
            </S.SoftSkills>
        </S.SkillsCard>
      </motion.div>
    </S.ContainerSkills>
  );
}

export default Skills;