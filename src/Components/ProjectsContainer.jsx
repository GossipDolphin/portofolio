import React from 'react';
import {ProjectsSectionStyled} from '../styles/StyledComponents.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

const ProjectsContainer = () => {
    return (
        <ProjectsSectionStyled id="Projects">
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
        </ProjectsSectionStyled>
    )
}

export default ProjectsContainer;