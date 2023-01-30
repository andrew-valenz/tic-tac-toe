/* eslint-disable indent */
import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import boardData from '../board-data.js';

export default function Header() {
  const { setBoard, setCurrentPlayer, setActive, gameMessage, setGameMessage } = useGameContext();

  function resetGame() {
    setActive(true),
      setCurrentPlayer('X'),
      setBoard([
        { space: 0, content: '' },
        { space: 1, content: '' },
        { space: 2, content: '' },
        { space: 3, content: '' },
        { space: 4, content: '' },
        { space: 5, content: '' },
        { space: 6, content: '' },
        { space: 7, content: '' },
        { space: 8, content: '' },
      ]),
      setGameMessage('');
  }

  return (
    <header>
      <h1>Tic Tac Slay!</h1>
      <p>{gameMessage}</p>
      <button onClick={resetGame}>Slay another day!</button>
    </header>
  );
}
