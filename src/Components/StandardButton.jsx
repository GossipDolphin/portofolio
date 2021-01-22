import React, { useRef, useEffect } from 'react';
import { StandardButtonStyled } from '../styles/StyledComponents.jsx';
import { Link } from 'react-scroll'


const StandardButton = ({ text, refArray }) => {
  const button = useRef(text);

  useEffect(() => {
    refArray.push(button);
  })
  var duration = 500;

  return (
    <Link to={text} spy={true} smooth={true} duration={duration}>
      <StandardButtonStyled ref={button}>
        <p>{text}</p>
      </StandardButtonStyled>
    </Link>
  )
}

export default StandardButton;