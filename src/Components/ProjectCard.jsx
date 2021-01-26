import React, {useEffect, useRef} from 'react';
import {ProjectCardStyled} from '../styles/StyledComponents.jsx';
import ImageComponent from '../components/ImageComponent.jsx';


const ProjectCard = ({refArray, title, content, src}) => {
const projectCardTitle = useRef(title) 

    useEffect(() =>{
        refArray.push(projectCardTitle);
      })
    return(
        <ProjectCardStyled ref={projectCardTitle}>
            <h2>{title}</h2>
            <p>{content}</p>
            <img src={src} alt="github logo"/>
        </ProjectCardStyled>
    )
}

export default ProjectCard;