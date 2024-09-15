import React from 'react';
import { Box, Plane } from '@react-three/drei';

const BoxingArena = () => {
  return (
    <group>
      <Plane
        args={[30, 30]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.01, 0]}
        receiveShadow
      >
        <meshStandardMaterial attach="material" color="#1E1E1E" />
      </Plane>
      <Box args={[12, 0.1, 12]} position={[0, 0, 0]} receiveShadow>
        <meshStandardMaterial attach="material" color="#F4B400" />
      </Box>
      <Box args={[12.5, 0.5, 12.5]} position={[0, -0.3, 0]} receiveShadow>
        <meshStandardMaterial attach="material" color="#0F9D58" />
      </Box>
      {/* Ring ropes */}
      {[-1, 0, 1].map((y) => (
        <Box key={y} args={[12, 0.1, 0.1]} position={[0, y + 0.5, -6]} castShadow>
          <meshStandardMaterial attach="material" color="#DB4437" />
        </Box>
      ))}
      {[-1, 0, 1].map((y) => (
        <Box key={y} args={[12, 0.1, 0.1]} position={[0, y + 0.5, 6]} castShadow>
          <meshStandardMaterial attach="material" color="#DB4437" />
        </Box>
      ))}
      {[-1, 0, 1].map((y) => (
        <Box key={y} args={[0.1, 0.1, 12]} position={[-6, y + 0.5, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#DB4437" />
        </Box>
      ))}
      {[-1, 0, 1].map((y) => (
        <Box key={y} args={[0.1, 0.1, 12]} position={[6, y + 0.5, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#DB4437" />
        </Box>
      ))}
    </group>
  );
};

export default BoxingArena;
