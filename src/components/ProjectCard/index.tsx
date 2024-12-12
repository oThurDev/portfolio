import React from 'react';
import * as S from "./styles";
import { listProjects } from './projects';
import { SiCss3, SiHtml5, SiJavascript, SiLaravel, SiReact, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si';

const ProjectCard: React.FC = () => {
    return (
        <S.ProjectsContainer>
            {listProjects.map((projects) => (
                <a href={projects.link} target='_blank'>
                    <S.Card style={{ backgroundImage: `url(${projects.image})`, marginRight: "30px", }}>
                        <h2>{projects.name}</h2>
                        <div key={projects.id}>
                            {projects.javascript === true && <SiJavascript className='icon' />}
                            {projects.html === true && <SiHtml5 className='icon' />}
                            {projects.css === true && <SiCss3 className='icon' />}
                            {projects.reactJs === true && <SiReact className='icon' />}
                            {projects.reactJs === true && <SiTypescript className='icon' />}
                            {projects.reactJs === true && <SiLaravel className='icon' />}
                            {projects.reactJs === true && <SiTailwindcss className='icon' />}
                            {projects.reactJs === true && <SiStyledcomponents className='icon' />}
                        </div>
                    </S.Card>
                </a>
            ))}
        </S.ProjectsContainer>
    );
}

export default ProjectCard;