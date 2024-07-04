import React, { useState } from 'react';
import * as S from "./styles";
import { listCompanies } from './companies';

const Experience: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <S.ExperienceContainer id='Experience'>
      <S.RightContainer>
        <h1>Experiência</h1>
        <S.Companies>
          {listCompanies.map((company, index) => (
            <a key={index} onClick={() => setSelectedIndex(index)}>
              {company.name}
            </a>
          ))}
        </S.Companies>
      </S.RightContainer>
      <S.CompaniesDescription>
        {listCompanies.map((company, index) => (
          index === selectedIndex && (
            <S.CompanyDetail key={index}>
              <S.TitleCompany>
                <h2>{company.cargo}</h2>
                <span>{company.dateInicio} - {company.dateFinal}</span>
              </S.TitleCompany>
              <h4>{company.name} - {company.city}</h4>
              <span>{company.desc}</span>
            </S.CompanyDetail>
          )
        ))}
      </S.CompaniesDescription>
    </S.ExperienceContainer>
  );
}

export default Experience;
