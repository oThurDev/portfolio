import React from 'react';
import * as S from "./styles";

const AboutMe: React.FC = () => {
  return (
    <S.AboutContainer id='AboutMe'>
      <S.ResumeMe>
        <h1>Sobre Mim</h1>
        <h3>Desenvolvedor Front-End | Estudante de Engenharia de Software</h3> 
        <span>- Giruá, RS -</span>
        <span className='resume'>Olá! Meu nome é Arthur Bernardo, tenho 18 anos e sou apaixonado por tecnologia. Atuo como desenvolvedor front-end, criando interfaces interativas e intuitivas para websites e aplicativos. No momento, também curso Engenharia de Software na Unijui, buscando me aprofundar na área e aprimorar minhas habilidades técnicas. Clique em um dos botão abaixo e venha conversar comigo!</span>
      </S.ResumeMe>
    </S.AboutContainer>
  );
}

export default AboutMe;