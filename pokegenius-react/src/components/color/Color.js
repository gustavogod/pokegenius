import React from 'react';
import styled, { css } from 'styled-components';
import { string, bool, func } from 'prop-types';
import '../style/animate.css';

export const Color = (props) => {
  const { color, flash, onClick, gameOver } = props;

  return (
    <DivColor 
      onClick={onClick}
      className={`${color} ${flash ? "flash" : ""} ${gameOver ? "game-over" : ""}`} 
    />
  );
}

Color.propTypes = {
  color: string.isRequired,
  flash: bool.isRequired,
  onClick: func.isRequired,
  gameOver: bool.isRequired
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