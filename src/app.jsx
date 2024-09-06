import React, { useState, useEffect } from 'react';

import { Canvas } from '@react-three/fiber';

import { OrbitControls, Stats } from '@react-three/drei';

import BoxingArena from './components/BoxingArena';

import Boxer from './components/Boxer';

import Opponent from './components/Opponent';

import UserInterface from './components/UserInterface';

import Lighting from './components/Lighting';

import SoundEffects from './components/SoundEffects';

export default function App() {

  const [gameState, setGameState] = useState('idle');

  const [playerHealth, setPlayerHealth] = useState(100);

  const [opponentHealth, setOpponentHealth] = useState(100);

  useEffect(() => {

    if (playerHealth <= 0 || opponentHealth <= 0) {

      setGameState('gameOver');

    }

  }, [playerHealth, opponentHealth]);

  const startFight = () => {

    setGameState('fighting');

    setPlayerHealth(100);

    setOpponentHealth(100);

  };

  const handlePunch = (attacker) => {

    const damage = Math.floor(Math.random() * 10) + 5;

    if (attacker === 'player') {

      setOpponentHealth((prev) => Math.max(0, prev - damage));

    } else {

      setPlayerHealth((prev) => Math.max(0, prev - damage));

    }

  };

  return (

    <>

      <Canvas shadows camera={{ position: [0, 5, 10], fov: 60 }}>

        <color attach="background" args={['#87CEEB']} />

        <fog attach="fog" args={['#87CEEB', 10, 50]} />

        <OrbitControls />

        <Stats />

        <Lighting />

        <BoxingArena />

        <Boxer position={[-2, 0, 0]} handlePunch={() => handlePunch('player')} />

        <Opponent position={[2, 0, 0]} handlePunch={() => handlePunch('opponent')} />

      </Canvas>

      <UserInterface

        gameState={gameState}

        startFight={startFight}

        playerHealth={playerHealth}

        opponentHealth={opponentHealth}

      />

      <SoundEffects gameState={gameState} />

    </>

  );

}p;