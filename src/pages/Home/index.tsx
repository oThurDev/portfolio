import React from 'react';
import * as S from "./styles"
import { Typewriter } from 'react-simple-typewriter';

import ImgHome from "../../assets/img-logo.png"

import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

const Home: React.FC = () => {
  return (
    <S.ContainerHome id='Home'>
        <S.Texts>
          <span>Olá Mundo! Eu sou o Arthur Bernardo</span>
          <h1>
            <Typewriter 
              words={['Desenvolvedor Front-End', 'Designer', 'Técnico em Informática']} 
              loop={0}
              cursor
              typeSpeed={100}
            />
          </h1>
          <S.ButtonsHome>
              <S.LinkedinButton>
                <FaLinkedinIn className='iconHome' />
                <a href='https://www.linkedin.com/in/othurdev/' target='_blank'>Linkedin</a>
              </S.LinkedinButton>
              <S.GitHubButton>
                <FaGithub className='iconHome' />
                <a href='https://github.com/oThurDev' target='_blank'>GitHub</a>
              </S.GitHubButton>
          </S.ButtonsHome>
        </S.Texts>
        <S.Images src={ImgHome} />
    </S.ContainerHome>
  );
}

export default Home;