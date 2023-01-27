import { createContext, useContext, useState } from 'react';
import boardData from '../board-data.js';
import React from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(boardData);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState('');
  const [active, setActive] = useState(true);

  const handleClick = (space) => {
    // change box content
    board[space] = { space: space, content: currentPlayer };
    // swtiching the current player
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        currentPlayer,
        setCurrentPlayer,
        gameMessage,
        setGameMessage,
        active,
        setActive,
        handleClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  return context;
};
export { useGameContext, GameProvider };
