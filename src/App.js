import React from 'react';

import { Canvas } from '@react-three/fiber';

import { OrbitControls } from '@react-three/drei';

import BoxingArena from './components/BoxingArena';

import Boxer from './components/Boxer';

import Opponent from './components/Opponent';

import Lighting from './components/Lighting';

import './App.css';

function App() {

  return (

    <div className="App">

      <Canvas shadows camera={{ position: [0, 5, 10], fov: 60 }}>

        <color attach="background" args={['#87CEEB']} />

        <fog attach="fog" args={['#87CEEB', 10, 50]} />

        <OrbitControls />

        <Lighting />

        <BoxingArena />

        <Boxer position={[-2, 0, 0]} />

        <Opponent position={[2, 0, 0]} />

      </Canvas>

    </div>

  );

}

export default App;