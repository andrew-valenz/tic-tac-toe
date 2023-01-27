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
    if (!active) return;
    if (!board[space].content) {
      // change box content
      board[space] = { space: space, content: currentPlayer };
      // switching the current player
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      checkWinner(board);
    }
    checkGameStatus();
  };

  const checkGameStatus = () => {
    if (!active) return;
    const winner = checkWinner(board);
    if (winner) {
      console.log('win!!');
      setGameMessage(`You win ${winner}!`);
      setActive(false);
    } else if (board[8].content === 'X') {
      setGameMessage('Cats Game!');
      console.log('cats game');
      // setActive(false);
    }
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

// check for a match of 3
const checkMatch = (a, b, c) => {
  if (!a || !b || !c) return false;
  if (a === b && b === c) return true;
};

//checking for winning combos
const checkWinner = (board) => {
  if (checkMatch(board[0].content, board[1].content, board[2].content)) return board[0].content;
  if (checkMatch(board[3].content, board[4].content, board[5].content)) return board[3].content;
  if (checkMatch(board[6].content, board[7].content, board[8].content)) return board[6].content;
  if (checkMatch(board[0].content, board[3].content, board[6].content)) return board[0].content;
  if (checkMatch(board[1].content, board[4].content, board[7].content)) return board[1].content;
  if (checkMatch(board[2].content, board[5].content, board[8].content)) return board[2].content;
  if (checkMatch(board[0].content, board[4].content, board[8].content)) return board[0].content;
  if (checkMatch(board[2].content, board[4].content, board[6].content)) return board[2].content;
};

const useGameContext = () => {
  const context = useContext(GameContext);

  return context;
};
export { useGameContext, GameProvider };
