import React from 'react';
import Box from './Box.js';
import './Board.css';
import { useGameContext } from '../context/GameContext.js';

export default function Board() {
  const { board } = useGameContext();
  return (
    <div className="board">
      {board.map((box) => (
        <Box content={box.content} key={box.space} space={box.space} />
      ))}
    </div>
  );
}
