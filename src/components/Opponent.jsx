import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

const Opponent = ({ position, handlePunch }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/boxer.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Idle.play();
  }, [actions]);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += Math.sin(state.clock.elapsedTime) * 0.01;
      if (Math.random() < 0.005) {
        actions.Punch.reset().play();
        handlePunch();
        setTimeout(() => actions.Idle.reset().play(), 500);
      }
    }
  });

  return (
    <group ref={group} position={position}>
      <skinnedMesh
        geometry={nodes.Boxer.geometry}
        material={materials.Body}
        skeleton={nodes.Boxer.skeleton}
        scale={0.5}
        castShadow
      >
        <meshStandardMaterial attach="material" color="#DB4437" />
      </skinnedMesh>
    </group>
  );
};

export default Opponent;
