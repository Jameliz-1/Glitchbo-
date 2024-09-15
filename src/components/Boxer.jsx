import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

const Boxer = ({ position, handlePunch, isPlayer }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/boxer.glb');
  const { actions } = useAnimations(animations, group);
  const [isPunching, setIsPunching] = useState(false);

  useEffect(() => {
    actions.Idle.play();
  }, [actions]);

  useFrame((state, delta) => {
    if (group.current) {
      if (isPunching) {
        group.current.rotation.y += delta * 5;
      } else {
        group.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
      }
    }
  });

  const onPunch = () => {
    setIsPunching(true);
    actions.Punch.reset().play();
    handlePunch();
    setTimeout(() => {
      setIsPunching(false);
      actions.Idle.reset().play();
    }, 500);
  };

  return (
    <group ref={group} position={position} onClick={isPlayer ? onPunch : undefined}>
      <skinnedMesh
        geometry={nodes.Boxer.geometry}
        material={materials.Body}
        skeleton={nodes.Boxer.skeleton}
        scale={0.5}
        castShadow
      >
        <meshStandardMaterial attach="material" color={isPlayer ? "#4285F4" : "#DB4437"} />
      </skinnedMesh>
    </group>
  );
};

export default Boxer;
