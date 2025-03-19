import React from 'react';
import * as S from "./styles"

import { Typewriter } from 'react-simple-typewriter';

import { SiGithub, SiInstagram, SiLinkedin, SiCodefactor } from 'react-icons/si';

import Perfil from "../../assets/perfil.png";

const Home: React.FC = () => {
  return ( 
    <S.ContainerHome id='Home'>
        <S.Texts>
          <span>Olá Mundo! Eu sou o Arthur Bernardo</span>
          <h1>
            <Typewriter 
              words={['Desenvolvedor Front-End', 'Designer', 'Técnico em Informática', 'Futuro Engenheiro de Software']} 
              loop={0}
              cursor
              typeSpeed={100}
            />
          </h1>
          <S.ButtonsSocials>
            <a href='https://www.linkedin.com/in/othurdev/' target='_blank'>
              <S.ButtonSocial>
                <SiLinkedin className='iconHome' />
              </S.ButtonSocial>
            </a>
            <a href='https://github.com/oThurDev' target='_blank'>
              <S.ButtonSocial>
                <SiGithub className='iconHome' />
              </S.ButtonSocial>
            </a>  
            <a href='https://instagram.com/thuurr.dev' target='_blank'>
              <S.ButtonSocial>
                <SiInstagram className='iconHome' />
              </S.ButtonSocial>  
            </a>
            <a href='https://abrir.link/AhOUX' target='_blank'>
              <S.ButtonSocial>
                <SiCodefactor className='iconHome' />
              </S.ButtonSocial>
            </a>  
          </S.ButtonsSocials>  
          <S.ButtonContact>
            <a href='#Contact'>Entrar em Contato</a>
          </S.ButtonContact>   
        </S.Texts>
        <S.RightHome>
          {/* <S.PerfilImg src={Perfil} /> */}
        </S.RightHome>
    </S.ContainerHome>
  );
}

export default Home;