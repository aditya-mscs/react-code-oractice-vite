
/*
Green light / red light
In this coding challenge you’re asked to write a small web game that recreates the iconic green light / red light game from Squid Game. The game will display a box that changes color between green and red. The goal of the game is to get to 15 clicks on the green box within 15 seconds.

You should write all of your game logic in the GreenLightRedLight component. By default, it should display a button with the text “Start Game”. This button will be used to start the game.

Once the button is pressed, your app should display a box that changes its color on a random basis. Ideally, it should change no sooner that 1s and no later than 2s.

If the users click on the red box, they failed the game and you should display Game Over! message and end the game immediately.

If the users click on the green box, you should increment their score count by 1. If they manage to click the green box 15 times within 15 seconds, they win and you should display You win! message.
*/
import React, { useState, useEffect, useRef } from 'react';
import GoBackToHome from './GoBacktoHome';

const GreenLightRedLight = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [boxColor, setBoxColor] = useState('gray'); // gray before game starts
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState(15);

  const colorIntervalRef = useRef(null);
  const timerRef = useRef(null);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setMessage('');
    setTimeLeft(15);
    setBoxColor('gray');

    // Change color randomly every 1 to 2 seconds
    colorIntervalRef.current = setInterval(() => {
      const nextColor = Math.random() < 0.5 ? 'red' : 'green';
      setBoxColor(nextColor);
    }, Math.random() * 1000 + 1000); // 1000–2000ms

    // Countdown timer
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          endGame(score >= 15 ? 'You win!' : 'Time’s up! Game Over!');
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleClick = () => {
    if (!gameStarted) return;

    if (boxColor === 'red') {
      endGame('Game Over! You clicked on red!');
    } else if (boxColor === 'green') {
      setScore((prev) => {
        const newScore = prev + 1;
        if (newScore >= 15) endGame('You win!');
        return newScore;
      });
    }
  };

  const endGame = (endMessage: string) => {
    clearInterval(colorIntervalRef.current);
    clearInterval(timerRef.current);
    setGameStarted(false);
    setBoxColor('gray');
    setMessage(endMessage);
  };

  useEffect(() => {
    return () => {
      clearInterval(colorIntervalRef.current);
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <GoBackToHome />
      <h1>Green Light / Red Light Game</h1>
      <p>Click the green box 15 times within 15 seconds!</p>
      <button type="button" onClick={startGame} disabled={gameStarted}>
        Start Game
      </button>
      <div
        className={`game-box`}
        onClick={handleClick}
        style={{
          width: '200px',
          height: '200px',
          margin: '20px auto',
          backgroundColor: boxColor,
          border: '3px solid black',
          cursor: gameStarted ? 'pointer' : 'default',
        }}
      ></div>
      <p>Score: {score} / 15</p>
      <p>Time Left: {timeLeft}s</p>
      <p className="game-message" style={{ color: 'red' }}>{message}</p>
    </div>
  );
};

export default GreenLightRedLight;