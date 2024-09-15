import React from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <h2 className="loading-text">Preparing the ring...</h2>
    </div>
  );
};

export default LoadingScreen;
