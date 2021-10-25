import styled, { css } from 'styled-components';

export const GameBoard = () => {

  return (
    <GeniusBoard>
      <Color className='green'/>
      <Color className='red'/>
      <Color className='yellow'/>
      <Color className='blue'/>
      <CenterImg />
    </GeniusBoard>
  );
}

const GeniusBoard = styled.div`
  display: grid;
  grid-template-areas: 'green-button red-button' 'yellow-button blue-button';
  gap: 10px;
  background-color: var(--gray);
  border-radius: 100%;
  width: 550px;
  height: 550px;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 45%);  
`;

const CenterImg = styled.div`
  position: absolute;
  z-index: 1;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin: auto;
  background-image: url(https:\/\/w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon-thumbnail.png);
  background-position: center;
  background-size: cover;
  border-style: none;
`;

const Color = styled.div`
  border: 5px solid black;

  ${ props => 
    (props.className === 'green' && css`
      grid-area: green-button;
      background-color: var(--green);
      border-top-left-radius: 100%;
    `) ||
    (props.className === 'red' && css`
      grid-area: red-button;
      background-color: var(--red);
      border-top-right-radius: 100%;
    `) ||
    (props.className === 'yellow' && css`
      grid-area: yellow-button;
      background-color: var(--yellow);
      border-bottom-left-radius: 100%;      
    `) ||
    (props.className === 'blue' && css`
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