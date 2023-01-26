import React from 'react';
import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
    const [board, setBoard] = useState(boardData);
    // const [current, setCurrentPlayer] = useState('');
    // const [gameMessage] = useState(null);
    // const [active] = useState(true/false);
    return (
        <GameContext.Provider value={{ board, setBoard }}>
            {children}
        </GameContext.Provider>
    );
};

const useGameContext = () => {
    const context = useContext(GameContext);
    
    return context;
}
export { useGameContext, GameProvider };