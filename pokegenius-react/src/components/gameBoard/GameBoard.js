import styled from 'styled-components';
import { Color } from '../index';
import { useState, useEffect, useRef } from 'react';
import { timeout } from '../../utils';


//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

export const GameBoard = () => {
  const [isOn, setIsOn] = useState(false);

  const colorList = ['green', 'red', 'yellow', 'blue'];

  const initPlay = {
    isDisplaying: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: []
  };

  const [play, setPlay] = useState(initPlay);
  const [flashColor, setFlashColor] = useState("");

  const scoreRecord = useRef(0);
  const gameIsOver = useRef(false);

  const startHandle = () => {
    setIsOn(true);
  }

  useEffect(() => {
    if (isOn) {
      setPlay({...initPlay, isDisplaying: true});
    } else {
      setPlay(initPlay);
    }
  }, [isOn])

  useEffect(() => {
    if(isOn && play.isDisplaying) {
      let newColor = colorList[Math.floor(Math.random()*4)];
      const copyColors = [ ...play.colors];
      copyColors.push(newColor);
      setPlay({ ...play, colors: copyColors});
    }
  }, [isOn, play.isDisplaying])

  useEffect(() => {
    if(isOn && play.isDisplaying && play.colors.length) {
      displayColors();
    }
  }, [isOn, play.isDisplaying, play.colors.length])

  const displayColors = async() => {
    await timeout(500);
    for (let i = 0; i < play.colors.length; i++) {
      setFlashColor(play.colors[i]);
      await timeout(500);
      setFlashColor("");
      await timeout(500);

      //when it's in the last color
      if (i === play.colors.length - 1) {
        const copyColors = [ ...play.colors];

        setPlay({
          ...play,
          isDisplaying: false,
          userPlay: true,
          userColors: copyColors.reverse()
        });
      }
    }
  }

  const colorClickHandle = async(color) => {
    if(!play.isDisplaying && play.userPlay) {

      const copyUserColors = [ ...play.userColors];
      const lastColor = copyUserColors.pop();
      setFlashColor(color);

      if (color === lastColor) { //match de color
        if (copyUserColors.length) { //still have colors to be matched
          setPlay({ ...play, userColors: copyUserColors});
        } else { //match all colors
          await timeout(500);
          setPlay({ 
            ...play, 
            isDisplaying:true, 
            userPlay:false, 
            score:play.colors.length,
            userColors:[]
          });
        }

      } else { //game over

        if (play.colors.length > scoreRecord.current) { //updates record score
          scoreRecord.current = play.colors.length - 1;
        }

        await timeout(500);
        gameIsOver.current = true;
        setPlay({ ...initPlay, score: play.colors.length - 1});
        await timeout(2000);
        gameIsOver.current = false;
      }

      await timeout(500);
      setFlashColor("");
    }
  }

  const closeHandle = () => {
    setIsOn(false);
  }

  return (
    <Wrapper>
      <ScoreBoard>
        <p>Recorde</p>
        <p>{`${scoreRecord.current}`}</p>
      </ScoreBoard>
      <GeniusBoard>
        {
          isOn && !play.isDisplaying && !play.userPlay && play.score && (
            <CenterImg >
              <p>Final Score: {play.score}</p>
              <button onClick={closeHandle}>Close</button>
            </CenterImg>
          )
        }
        {
          colorList && 
          colorList.map((value, index) => 
            <Color 
              key={`${index}`} 
              onClick={() => colorClickHandle(value)} 
              flash={flashColor === value} 
              color={value}
              gameOver={gameIsOver.current}
            /> 
          )
        }
        {
          !isOn && !play.score && (
            <CenterImg onClick={startHandle} className="startButton">
              Start
            </CenterImg>
          )
        }
        {
          isOn && (play.isDisplaying || play.userPlay) && (
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