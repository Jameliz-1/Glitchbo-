import React from 'react';

import { Box, Plane } from '@react-three/drei';

const BoxingArena = () => {

  return (

    <group>

      <Plane

        args={[20, 20]}

        rotation={[-Math.PI / 2, 0, 0]}

        position={[0, -0.01, 0]}

        receiveShadow

      >

        <meshStandardMaterial attach="material" color="#3d3d3d" />

      </Plane>

      <Box args={[10, 0.1, 10]} position={[0, 0, 0]} receiveShadow>

        <meshStandardMaterial attach="material" color="#8B4513" />

      </Box>

      <Box args={[10.5, 0.5, 10.5]} position={[0, -0.3, 0]} receiveShadow>

        <meshStandardMaterial attach="material" color="#A52A2A" />

      </Box>

      {/* Ring ropes */}

      {[-1, 0, 1].map((y) => (

        <Box key={y} args={[10, 0.1, 0.1]} position={[0, y + 0.5, -5]} castShadow>

          <meshStandardMaterial attach="material" color="#FF0000" />

        </Box>

      ))}

      {[-1, 0, 1].map((y) => (

        <Box key={y} args={[10, 0.1, 0.1]} position={[0, y + 0.5, 5]} castShadow>

          <meshStandardMaterial attach="material" color="#FF0000" />

        </Box>

      ))}

      {[-1, 0, 1].map((y) => (

        <Box key={y} args={[0.1, 0.1, 10]} position={[-5, y + 0.5, 0]} castShadow>

          <meshStandardMaterial attach="material" color="#FF0000" />

        </Box>

      ))}

      {[-1, 0, 1].map((y) => (

        <Box key={y} args={[0.1, 0.1, 10]} position={[5, y + 0.5, 0]} castShadow>

          <meshStandardMaterial attach="material" color="#FF0000" />

        </Box>

      ))}

    </group>

  );

};

export default BoxingArena;