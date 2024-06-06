import React from 'react';
import * as S from "./styles"
import { Typewriter } from 'react-simple-typewriter';

import ImgHome from "../../assets/logo_branca.png"

import { SiGithub, SiLinkedin } from 'react-icons/si';

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
                <a href='https://www.linkedin.com/in/othurdev/' target='_blank'>
                  <SiLinkedin className='iconHome' />
                </a>
              </S.LinkedinButton>
              <S.GitHubButton>
                <a href='https://github.com/oThurDev' target='_blank'>
                  <SiGithub className='iconHome' />
                </a>
              </S.GitHubButton>
          </S.ButtonsHome>
        </S.Texts>
        <S.Images src={ImgHome} />
    </S.ContainerHome>
  );
}

export default Home;