import React from 'react';
import * as S from "./styles"

import ImgLogo from "../../assets/logo_simple.png";
import { SlMenu } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
        <a href='#Home'>
          <S.Logo src={ImgLogo} />
        </a>
        <S.Nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about-me'>Sobre Mim</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/projects'>Projetos</Link></li>
            </ul>
        </S.Nav>
        <S.HeaderMobileMenu>
          <SlMenu className='menu' />
        </S.HeaderMobileMenu>
    </S.HeaderContainer>
  );
}

export default Header;