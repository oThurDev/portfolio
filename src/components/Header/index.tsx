import React from 'react';
import * as S from "./styles"

import ImgLogo from "../../assets/logo_simple.png";

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
        <a href='#Home'>
          <S.Logo src={ImgLogo} />
        </a>
        <S.Nav>
            <ul>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#AboutMe'>Sobre Mim</a></li>
                <li><a href='#Experience'>Experiência</a></li>
                <li><a href='#Skills'>Habilidades</a></li>
                <li><a href='#Projects'>Projetos</a></li>
                <li><a href='#Contact'>Contato</a></li>
            </ul>
        </S.Nav>
    </S.HeaderContainer>
  );
}

export default Header;