import React from 'react';
import * as S from "./styles";

import ImageMe from "../../assets/foto.jpg"
import Curriculo from "../../assets/curriculo.pdf"

import { FaArrowDown, FaClipboardUser } from 'react-icons/fa6';

const AboutMe: React.FC = () => {
  return (
    <S.AboutContainer id='AboutMe'>
        <S.ImageMe src={ImageMe} />
        <S.ResumeMe>
          <h1>Sobre Mim</h1>
          <h3>Desenvolvedor Front-End | Estudante de Engenharia de Software</h3> 
          <span>Giruá, RS</span>
          <span>Olá! Meu nome é Arthur Bernardo, tenho 18 anos e sou apaixonado por tecnologia. Atuo como desenvolvedor front-end, criando interfaces interativas e intuitivas para websites e aplicativos. No momento, também curso Engenharia de Software na Unijui, buscando me aprofundar na área e aprimorar minhas habilidades técnicas. Clique em um dos botão abaixo e venha conversar comigo!</span>
          <S.ButtonsAboutMe>
            <S.DownloadCv>
              <FaClipboardUser className='iconAboutMe'/>
              <a href={Curriculo} download="Curriculo_Arthur.pdf">Currículo</a>
            </S.DownloadCv>
            <S.Contato>
              <FaArrowDown className='iconAboutMe' />
              <a href='#contact'>Ver opções de Contato</a>
            </S.Contato>
          </S.ButtonsAboutMe>
        </S.ResumeMe>
    </S.AboutContainer>
  );
}

export default AboutMe;