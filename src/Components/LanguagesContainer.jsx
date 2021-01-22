import React, {useEffect} from 'react';
import {LanguagesSectionStyled} from '../styles/StyledComponents.jsx';
import ImageComponent from '../components/ImageComponent.jsx';
import cSharpPNG from '../images/c#.png';
import jsPNG from '../images/js.png';
import javaPNG from '../images/java.png';
import cssPNG from '../images/css3.png';
import sqlPNG from '../images/sql.png';
import htmlPNG from '../images/html5.png';

const LanguagesContainer = ({setRefArray}) => {

    var refArray = [];

    useEffect(() =>{
       setRefArray(refArray)
    })

    return (
        <LanguagesSectionStyled id="Languages">
            <ImageComponent refArray={refArray} src={jsPNG} alt="js logo"></ImageComponent>
            <ImageComponent refArray={refArray} src={cssPNG} alt="css logo"></ImageComponent>
            <ImageComponent refArray={refArray} src={htmlPNG} alt="html logo"></ImageComponent>
            <ImageComponent refArray={refArray} src={cSharpPNG} alt="c# logo"></ImageComponent>
            <ImageComponent refArray={refArray} src={javaPNG} alt="java logo"></ImageComponent>
            <ImageComponent refArray={refArray} src={sqlPNG} alt="sql logo"></ImageComponent>
        </LanguagesSectionStyled>
    )
}

export default LanguagesContainer;