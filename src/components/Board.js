import React from 'react';
import Box from './Box.js';
import boardData from '../board-data.js';

export default function Board() {
  return (
    <div>
      {boardData.map((data) => (
        <Box key={data.space} />
      ))}
    </div>
  );
}
