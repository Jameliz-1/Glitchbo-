import React from 'react';

const Lighting = () => {

  return (

    <>

      <ambientLight intensity={0.5} />

      <pointLight position={[10, 10, 10]} intensity={1} castShadow />

      <spotLight

        position={[0, 10, 0]}

        angle={0.3}

        penumbra={1}

        intensity={1}

        castShadow

      />

    </>

  );

};

export default Lighting;