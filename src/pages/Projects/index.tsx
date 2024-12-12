import React from 'react';
import * as S from "./styles";
import ProjectCard from '../../components/ProjectCard';
import { FiExternalLink } from 'react-icons/fi';

const Projects: React.FC = () => {
  return (
    <S.ProjectsContainer id='Projects'>
        <h1>Projetos</h1>
        <S.ProjectsCards>
          <ProjectCard />
        </S.ProjectsCards>
        <a href='https://github.com/oThurDev' target='_blank'>
          <S.ButtonProjects>
            <span>Mais projetos <FiExternalLink /></span>
          </S.ButtonProjects>
        </a>
    </S.ProjectsContainer>
  );
}

export default Projects;