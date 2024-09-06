import React, { useRef, useState } from 'react';

import { useFrame } from '@react-three/fiber';

import { useGLTF } from '@react-three/drei';

const Boxer = ({ position, handlePunch }) => {

  const { nodes, materials } = useGLTF('/models/boxer.glb');

  const boxerRef = useRef();

  const [isPunching, setIsPunching] = useState(false);

  useFrame((state, delta) => {

    if (boxerRef.current) {

      if (isPunching) {

        boxerRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 10) * 0.2;

      } else {

        boxerRef.current.rotation.z = 0;

      }

    }

  });

  const onPunch = () => {

    setIsPunching(true);

    handlePunch();

    setTimeout(() => setIsPunching(false), 300);

  };

  return (

    <group ref={boxerRef} position={position} onClick={onPunch}>

      <mesh

        geometry={nodes.Boxer.geometry}

        material={materials.Body}

        scale={0.5}

        castShadow

      >

        <meshStandardMaterial attach="material" color="#0000FF" />

      </mesh>

    </group>

  );

};

export default Boxer;