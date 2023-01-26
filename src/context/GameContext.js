import React from 'react';
import { createContext, useContext, useState } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
    const [board, setBoard] = useState();
    const [current, setCurrentPlayer] = useState('');
    const [gameMessage] = useState(null);
    const [active] = useState(true/false);
}

export { GameContext, GameProvider, useContext };