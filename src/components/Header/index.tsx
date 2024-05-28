import React from 'react';
import * as S from "./styles"

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
        <S.Logo>
            <span>o thur dev</span>
        </S.Logo>
        <S.Nav>
            <ul>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#AboutMe'>Sobre Mim</a></li>
                <li><a href='#Experience'>Experiência</a></li>
                <li><a href='#Skills'>Habilidades</a></li>
                <li><a href='./'>Projetos</a></li>
                <li><a href='./'>Contato</a></li>
            </ul>
        </S.Nav>
    </S.HeaderContainer>
  );
}

export default Header;