import React from 'react';
import * as S from "./styles"

const Experience: React.FC = () => {
  return (
    <S.ExperienceContainer id='Experience'>
        <S.RightContainer>
            <h1>Experiência</h1>
            <S.Companies>
                <a>ADAC</a>
                <a>Ageliza</a>
                <a>Devs Duo</a>
            </S.Companies>
        </S.RightContainer>
        <S.CompaniesDescription>
            <S.TitleCompany>
                <h3>Programador Front-End</h3>
                <span>Data 01 - Data 01</span>
            </S.TitleCompany>
            <span>Descrição da Vaga</span>
        </S.CompaniesDescription>
    </S.ExperienceContainer>
  );
}

export default Experience;