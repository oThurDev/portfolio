import React from 'react';
import * as S from "./styles";

const SkillsCard: React.FC = () => {
  return (
    <S.SkillsCard>
        <S.ProgrammerSkills></S.ProgrammerSkills>
        <S.DesignSkills></S.DesignSkills>
        <S.SoftSkills></S.SoftSkills>
    </S.SkillsCard>
  );
}

export default SkillsCard;