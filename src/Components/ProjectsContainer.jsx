import React, {useEffect} from 'react';
import {ProjectsSectionStyled} from '../styles/StyledComponents.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import githubPNG from '../images/github.png'

const ProjectsContainer = ({setRefArray}) => {

    var refArray = [];

    useEffect(() =>{
       setRefArray(refArray)
    })

    return (
        <ProjectsSectionStyled id="Projects">
            <ProjectCard refArray={refArray} title="Sk8spots" src={githubPNG} content="Social media for skaters and snowboarders. Created inn .NET with C# and xaml"></ProjectCard>
            <ProjectCard refArray={refArray} title="Drink don't drive" src={githubPNG} content="Multiplayer cardgames created inn Android Studio with Java and xml"></ProjectCard>
            <ProjectCard refArray={refArray} title="Portofolio" src={githubPNG} content="Protofolio - this webapp. Created inn React.js with Javascript, Html and css"></ProjectCard>
        </ProjectsSectionStyled>
    )
}

export default ProjectsContainer;