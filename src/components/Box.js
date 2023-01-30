import React from 'react';
import './Box.css';
import { useGameContext } from '../context/GameContext.js';

export default function Box({ space, content }) {
  const { handleClick } = useGameContext();
  return (
    <div className="box" onClick={() => handleClick(space)}>
      {content}
    </div>
  );
}
