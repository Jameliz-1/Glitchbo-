import React from 'react';
import './UserInterface.css';

const UserInterface = ({ gameState, startFight, playerHealth, opponentHealth, score }) => {
  console.log('Current game state:', gameState);
  return (
    <div className="user-interface">
      <h1 className="title">3D Boxing Arena</h1>
      {gameState === 'idle' && (
        <button className="start-button" onClick={startFight}>
          Start Fight
        </button>
      )}
      {gameState === 'fighting' && (
        <div className="game-info">
          <div className="health-bars">
            <div className="health-bar">
              <div className="health-label">Player</div>
              <div className="health-bar-outer">
                <div
                  className="health-bar-inner player-health"
                  style={{ width: `${playerHealth}%` }}
                ></div>
              </div>
            </div>
            <div className="health-bar">
              <div className="health-label">Opponent</div>
              <div className="health-bar-outer">
                <div
                  className="health-bar-inner opponent-health"
                  style={{ width: `${opponentHealth}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="score">Score: {score}</div>
        </div>
      )}
      {gameState === 'gameOver' && (
        <div className="game-over">
          <h2>{playerHealth > opponentHealth ? 'You Win!' : 'You Lose!'}</h2>
          <button className="play-again-button" onClick={startFight}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default UserInterface;
