import React from 'react';
import * as S from "./styles";
import ProjectCard from '../../components/ProjectCard';
import { FiExternalLink } from 'react-icons/fi';

import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <S.ProjectsContainer id='Projects'>
        <h1>Projetos</h1>
        <motion.div
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <S.ProjectsCards>
            <ProjectCard />
          </S.ProjectsCards>
        </motion.div>
        <a href='https://github.com/oThurDev' target='_blank'>
          <S.ButtonProjects>
            <span>Mais projetos <FiExternalLink /></span>
          </S.ButtonProjects>
        </a>
    </S.ProjectsContainer>
  );
}

export default Projects;