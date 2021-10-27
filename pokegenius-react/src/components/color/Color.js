import React from 'react';
import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import '../style/animate.css';

export const Color = (props) => {
  const { color, flash, onClick } = props;

  return (
    <DivColor 
      onClick={onClick}
      className={`${color} ${flash ? "flash" : ""}`} 
    />
  );
}

Color.propTypes = {
  className: string.isRequired
}

const DivColor = styled.div`
  border: 5px solid black;

  ${ props => 
    (props.className.includes('green') && css`
      grid-area: green-button;
      background-color: var(--green);
      border-top-left-radius: 100%;
    `) ||
    (props.className.includes('red') && css`
      grid-area: red-button;
      background-color: var(--red);
      border-top-right-radius: 100%;
    `) ||
    (props.className.includes('yellow') && css`
      grid-area: yellow-button;
      background-color: var(--yellow);
      border-bottom-left-radius: 100%;      
    `) ||
    (props.className.includes('blue') && css`
      grid-area: blue-button;
      background-color: var(--blue);
      border-bottom-right-radius: 100%;      
    `)
  }

  :hover {
    filter: brightness(200%);
    cursor: pointer;
  }
`;