import React from 'react';
import { OtherSkillCardStyled } from '../styles/StyledComponents.jsx';

const OtherSkillCard = ({ title, content, src }) => {
    return (
        <OtherSkillCardStyled>
            <h2>{title}</h2>
            <p>{content}</p>
            <img src={src} alt={title}></img>
        </OtherSkillCardStyled>
    )
}

export default OtherSkillCard;