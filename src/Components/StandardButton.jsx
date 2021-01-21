import React, {useRef, useEffect} from 'react';
import { StandardButtonStyled } from '../styles/StyledComponents.jsx';

const StandardButton = ({text, refArray}) => {
    const button = useRef(text);

      useEffect(() =>{
        refArray.push(button);
      })
      
    return (
        <StandardButtonStyled ref={button}> 
            <p>{text}</p>
        </StandardButtonStyled>
    )
}

export default StandardButton;