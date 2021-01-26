import React from 'react';
import OtherSkillCard from '../components/OtherSkillCard.jsx';
import { OtherSkillsContainerStyled } from '../styles/StyledComponents.jsx';

const OtherSkillsContainer = () => {

    return (
        <OtherSkillsContainerStyled>
            <OtherSkillCard title="Gaming" content="Strategy games mostly"></OtherSkillCard>
            <OtherSkillCard title="Skating and Longboarding" content=""></OtherSkillCard>
            <OtherSkillCard title="Pixel Art" content="Like the background and the guiding character :)"></OtherSkillCard>
        </OtherSkillsContainerStyled>
    )
}

export default OtherSkillsContainer;