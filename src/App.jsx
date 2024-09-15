import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import BoxingArena from './components/BoxingArena';
import Boxer from './components/Boxer';
import Opponent from './components/Opponent';
import Lighting from './components/Lighting';
import UserInterface from './components/UserInterface';
import SoundEffects from './components/SoundEffects';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('idle');
  const [playerHealth, setPlayerHealth] = useState(100);
  const [opponentHealth, setOpponentHealth] = useState(100);
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log('Game State:', gameState);
  }, [gameState]);

  const startFight = () => {
    console.log('Starting fight...');
    setGameState('fighting');
    setPlayerHealth(100);
    setOpponentHealth(100);
    setScore(0);
  };

  const handlePunch = (attacker) => {
    console.log(`${attacker} punched!`);
    const damage = Math.floor(Math.random() * 10) + 5;
    if (attacker === 'player') {
      setOpponentHealth((prev) => Math.max(0, prev - damage));
      setScore((prev) => prev + damage);
    } else {
      setPlayerHealth((prev) => Math.max(0, prev - damage));
    }
  };

  return (
    <div className="App">
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 60 }}>
  <color attach="background" args={['#87CEEB']} />
  <fog attach="fog" args={['#87CEEB', 10, 50]} />
  <Suspense fallback={null}>
    <OrbitControls />
    <Stars />
    <Lighting />
    <BoxingArena />
    <Boxer position={[-2, 0, 0]} handlePunch={() => handlePunch('player')} />
    <Opponent position={[2, 0, 0]} handlePunch={() => handlePunch('opponent')} />
  </Suspense>
</Canvas>
      <UserInterface
        gameState={gameState}
        startFight={startFight}
        playerHealth={playerHealth}
        opponentHealth={opponentHealth}
        score={score}
      />
      <SoundEffects gameState={gameState} />
    </div>
  );
}

export default App;
