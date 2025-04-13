import React from 'react';
import * as S from "./styles"

import ImgLogo from "../../assets/logo_simple.png";
import { SlMenu } from 'react-icons/sl';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
        <a href='#Home'>
          <S.Logo src={ImgLogo} />
        </a>
        <S.Nav>
            <ul>
                <li><NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
                <li><NavLink to='/skills' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Skills</NavLink></li>
                <li><NavLink to='/experience' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Experiência</NavLink></li>
                <li><NavLink to='/projects' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projetos</NavLink></li>
            </ul>
        </S.Nav>
        <S.HeaderMobileMenu>
          <SlMenu className='menu' />
        </S.HeaderMobileMenu>
    </S.HeaderContainer>
  );
}

export default Header;