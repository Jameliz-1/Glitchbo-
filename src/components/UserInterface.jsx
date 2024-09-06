import React from 'react';

const UserInterface = ({ gameState, startFight, playerHealth, opponentHealth }) => {

  return (

    <div style={{ position: 'absolute', top: 20, left: 20, color: 'white' }}>

      <h1>3D Boxing Arena</h1>

      {gameState === 'idle' && (

        <button

          style={{ padding: '10px', backgroundColor: 'blue', color: 'white', cursor: 'pointer' }}

          onClick={startFight}

        >

          Start Fight

        </button>

      )}

      {gameState === 'fighting' && (

        <div>

          <p>Player Health: {playerHealth}</p>

          <p>Opponent Health: {opponentHealth}</p>

        </div>

      )}

      {gameState === 'gameOver' && (

        <div>

          <h2>{playerHealth > opponentHealth ? 'You Win!' : 'You Lose!'}</h2>

          <button

            style={{ padding: '10px', backgroundColor: 'green', color: 'white', cursor: 'pointer' }}

            onClick={startFight}

          >

            Play Again

          </button>

        </div>

      )}

    </div>

  );

};

export default UserInterface;