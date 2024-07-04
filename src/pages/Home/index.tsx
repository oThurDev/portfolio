import React from 'react';
import * as S from "./styles"

import { Typewriter } from 'react-simple-typewriter';

import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

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
        </S.Texts>
        <S.ButtonsHome>
          <S.DownloadCv>
            <a>Currículo</a>
          </S.DownloadCv>
          <S.ButtonContact>
            <a>Entrar em Contato</a>
          </S.ButtonContact>
          <S.ButtonsSocials>
            <S.ButtonSocial>
              <a href='https://www.linkedin.com/in/othurdev/' target='_blank'>
                <SiLinkedin className='iconHome' />
              </a>
            </S.ButtonSocial>
            <S.ButtonSocial>
              <a href='https://github.com/oThurDev' target='_blank'>
                <SiGithub className='iconHome' />
              </a>
            </S.ButtonSocial>  
            <S.ButtonSocial>
              <a href='https://github.com/oThurDev' target='_blank'>
                <SiInstagram className='iconHome' />
              </a>
            </S.ButtonSocial>  
          </S.ButtonsSocials>      
        </S.ButtonsHome>
    </S.ContainerHome>
  );
}

export default Home;