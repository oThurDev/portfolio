import React from 'react';
import * as S from "./styles";

const AboutMe: React.FC = () => {
  return (
    <S.AboutContainer id='AboutMe'>
      <S.ResumeMe>
        <h1>Sobre Mim</h1>
        <h3>Desenvolvedor Front-End | Estudante de Engenharia de Software</h3> 
        <span>- Garibaldi, RS -</span>
        <span className='resume'>Olá! Meu nome é Arthur Bernardo, tenho 18 anos e sou apaixonado por tecnologia. Desde pequeno sou vidrado em tecnologia, sempre gostei da área. Sou programador com +4 anos de experiência no mercado e em busca de aprimorar meus conhecimentos curso Engenharia de Software na UCS de Caxias do Sul. Tenho dominio em JavaScript, TypeScript, React Js, Laravel e algumas bibliotecas como Styled-Components, Tailwind CSS. Tambem conhecimento em Git e Github. Esta minha paixão pela área me motiva e me impulsiona cada vez mais a buscar novos desafios, oportunidades e experiências, sempre com foco e dedicação para entregar o meu melhor!</span>
      </S.ResumeMe>
    </S.AboutContainer>
  );
}

export default AboutMe;