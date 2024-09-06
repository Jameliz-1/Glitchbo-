import React, { useRef } from 'react';

import { useFrame } from '@react-three/fiber';

import { useGLTF } from '@react-three/drei';

const Opponent = ({ position, handlePunch }) => {

  const { nodes, materials } = useGLTF('/models/boxer.glb');

  const opponentRef = useRef();

  useFrame((state, delta) => {

    if (opponentRef.current) {

      opponentRef.current.rotation.y += Math.sin(state.clock.elapsedTime) * 0.01;

      if (Math.random() < 0.005) {

        handlePunch();

      }

    }

  });

  return (

    <group ref={opponentRef} position={position}>

      <mesh

        geometry={nodes.Boxer.geometry}

        material={materials.Body}

        scale={0.5}

        castShadow

      >

        <meshStandardMaterial attach="material" color="#FF0000" />

      </mesh>

    </group>

  );

};

export default Opponent;