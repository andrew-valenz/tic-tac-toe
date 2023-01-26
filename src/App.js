import React from 'react';
import './App.css';
import { GameProvider } from './context/GameContext.js';

function App() {
  return (
    <div className="App">
      <GameProvider />
    </div>
  );
}

export default App;
