import React from 'react';
import './App.css';
import Board from './components/Board.js';

function App() {
  return (
    <div className="App">
      <h1>Tic Tac Slay</h1>
      {/* header */}
      <Board />
    </div>
  );
}

export default App;
