import React, {useEffect} from 'react';
import {TechnologiesSectionStyled} from '../styles/StyledComponents';
import ImageComponent from './ImageComponent.jsx';
import reactPNG from '../images/react-js-blog-header.png';
import androidPNG from '../images/androidstudio.png'
import nodeJsPNG from '../images/220px-Node.js_logo.svg.png'
import firebasePNG from '../images/firebase.png'
import azurePNG from '../images/microsoft-azure.png'
import mongoDbPNG from '../images/mongodb.png'
import netCorePNG from '../images/netcore.png'



const TechnologiesContainer = ({setRefArray}) => {
    var refArray = [];

    useEffect(() =>{
       setRefArray(refArray)
    })
    return (
        <TechnologiesSectionStyled id="Technologies">
            <ImageComponent refArray={refArray} src={reactPNG} alt="react logo"/>
            <ImageComponent refArray={refArray} src={azurePNG} alt="azure logo"/>
            <ImageComponent refArray={refArray} src={nodeJsPNG} alt="nodeJs logo"/>
            <ImageComponent refArray={refArray} src={netCorePNG} alt="netCore logo"/>
            <ImageComponent refArray={refArray} src={androidPNG} alt="android logo"/>
            <ImageComponent refArray={refArray} src={mongoDbPNG} alt="mongoDb logo"/>
            <ImageComponent refArray={refArray} src={firebasePNG} alt="firebase logo"/>
        </TechnologiesSectionStyled>
    )
}

export default TechnologiesContainer;