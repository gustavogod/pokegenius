import styled from 'styled-components';
import { Color } from '../index';
import { useState, useEffect } from 'react';
import { timeout } from '../../utils';


//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul


export const GameBoard = () => {
  const [isOn, setIsOn] = useState(false);

  const colorList = ['green', 'red', 'yellow', 'blue'];

  const initPlay = {
    isDisplay: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: []
  };

  const [play, setPlay] = useState(initPlay);
  const [flashColor, setFlashColor] = useState("");

  const startHandle = () => {
    setIsOn(true);
  }

  useEffect(() => {
    if (isOn) {
      setPlay({...initPlay, isDisplay: true});
    } else {
      setPlay(initPlay);
    }
  }, [isOn])

  useEffect(() => {
    if(isOn && play.isDisplay) {
      let newColor = colorList[Math.floor(Math.random()*4)];
      const copyColors = [ ...play.colors];
      copyColors.push(newColor);
      setPlay({ ...play, colors: copyColors});
    }
  }, [isOn, play.isDisplay])

  useEffect(() => {
    if(isOn && play.isDisplay && play.colors.length) {
      displayColors();
    }
  }, [isOn, play.isDisplay, play.colors.length])  

  const displayColors = async() => {
    for (let i = 0; i < play.colors.length; i++) {
      setFlashColor(play.colors[i]);
      await timeout(500);
      setFlashColor("");
      await timeout(500);
    }
  }

  return (
    <Wrapper>
      <ScoreBoard>
        <p>Recorde</p>
      </ScoreBoard>
      <GeniusBoard>
        {
          colorList && 
          colorList.map((value, index) => <Color flash={flashColor === value} color={value} /> )
        }
        {
          !isOn && !play.score && (
            <CenterImg onClick={startHandle} className="startButton">
              Start
            </CenterImg>
          )
        }
        {
          isOn && (play.isDisplay || play.userPlay) && (
            <CenterImg className="score">
              {play.score}
            </CenterImg>
          )
        }
      </GeniusBoard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
`;

const ScoreBoard = styled.div`
  position: relative;
  border: 2px solid black;
  align-self: center;
  left: 100px;
  width: 10rem;
  height: 20rem;
`;

const GeniusBoard = styled.div`
  position: relative;
  left: 15%;
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
/*   background-image: url(https:\/\/w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon-thumbnail.png); 
  background-position: center;
  background-size: cover; */
  border: 5px solid black;
  background-color: aliceblue;
  text-align: center;
`;