import React, { useEffect, useRef } from 'react';

const SoundEffects = ({ gameState }) => {

  const backgroundMusicRef = useRef(new Audio('/sounds/background.mp3'));

  const punchSoundRef = useRef(new Audio('/sounds/punch.mp3'));

  const victorySoundRef = useRef(new Audio('/sounds/victory.mp3'));

  const defeatSoundRef = useRef(new Audio('/sounds/defeat.mp3'));

  useEffect(() => {

    backgroundMusicRef.current.loop = true;

    if (gameState === 'fighting') {

      backgroundMusicRef.current.play();

    } else {

      backgroundMusicRef.current.pause();

      backgroundMusicRef.current.currentTime = 0;

    }

    return () => {

      backgroundMusicRef.current.pause();

      backgroundMusicRef.current.currentTime = 0;

    };

  }, [gameState]);

  useEffect(() => {

    if (gameState === 'gameOver') {

      if (Math.random() > 0.5) {

        victorySoundRef.current.play();

      } else {

        defeatSoundRef.current.play();

      }

    }

  }, [gameState]);

  const playPunchSound = () => {

    punchSoundRef.current.currentTime = 0;

    punchSoundRef.current.play();

  };

  return null;

};

export default SoundEffects;