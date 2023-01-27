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
  if (checkMatch(board[0].content, board[1].content, board[2].content)) console.log('winner!');
  if (checkMatch(board[3].content, board[4].content, board[5].content)) console.log('winner!');
  if (checkMatch(board[6].content, board[7].content, board[8].content)) console.log('winner!');
  if (checkMatch(board[0].content, board[3].content, board[6].content)) console.log('winner!');
  if (checkMatch(board[1].content, board[4].content, board[7].content)) console.log('winner!');
  if (checkMatch(board[2].content, board[5].content, board[8].content)) console.log('winner!');
  if (checkMatch(board[0].content, board[4].content, board[8].content)) console.log('winner!');
  if (checkMatch(board[2].content, board[4].content, board[6].content)) console.log('winner!');
};

// const checkGameStatus = () => {
//   if (!active) return;
//   const winner = checkWinner();
//   if (winner) {
//     setGameMessage(`You win ${winner}!`);
//     setActive(false);
//   } else if (isCatsGame()) {
//     setGameMessage('Cats Game!');
//     setActive(false);
//   }
// };
// checkGameStatus();

const useGameContext = () => {
  const context = useContext(GameContext);

  return context;
};
export { useGameContext, GameProvider };
