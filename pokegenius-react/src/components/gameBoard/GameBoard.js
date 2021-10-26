import styled from 'styled-components';
import { Color } from '../index';

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
  margin: 10px;  
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

