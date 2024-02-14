import React, { useState } from 'react';


const Piano = () => {
  const [pressedKey, setPressedKey] = useState(null);

  const playSound = (note) => {
    const audio = new Audio(`/mp3/${note}.mp3`);
    audio.play().catch(error => console.error('Error playing sound:', error));
    setPressedKey(note);
    setTimeout(() => setPressedKey(null), 300); // Reset color after 300ms
  };

  const getKeyClass = (note) => {
    return pressedKey === note ? 'pressed' : '';
  };

  return (
    <div className="piano-container">
      <div className={`key white ${getKeyClass('A3')}`} data-note="A3" onClick={() => playSound('A3')}></div>
      <div className={`key black ${getKeyClass('Bb3')}`} data-note="Bb3" onClick={() => playSound('Bb3')}></div>
      <div className={`key white ${getKeyClass('B3')}`} data-note="B3" onClick={() => playSound('B3')}></div>
      <div className={`key white ${getKeyClass('C4')}`} data-note="C4" onClick={() => playSound('C4')}></div>
      <div className={`key black ${getKeyClass('Db4')}`} data-note="Db4" onClick={() => playSound('Db4')}></div>
      <div className={`key white ${getKeyClass('D4')}`} data-note="D4" onClick={() => playSound('D4')}></div>
      <div className={`key black ${getKeyClass('Eb4')}`} data-note="Eb4" onClick={() => playSound('Eb4')}></div>
      <div className={`key white ${getKeyClass('E4')}`} data-note="E4" onClick={() => playSound('E4')}></div>
      <div className={`key white ${getKeyClass('F4')}`} data-note="F4" onClick={() => playSound('F4')}></div>
      <div className={`key black ${getKeyClass('Gb4')}`} data-note="Gb4" onClick={() => playSound('Gb4')}></div>
      <div className={`key white ${getKeyClass('G4')}`} data-note="G4" onClick={() => playSound('G4')}></div>
      <div className={`key black ${getKeyClass('Ab4')}`} data-note="Ab4" onClick={() => playSound('Ab4')}></div>
      <div className={`key white ${getKeyClass('A4')}`} data-note="A4" onClick={() => playSound('A4')}></div>
      <div className={`key black ${getKeyClass('Bb4')}`} data-note="Bb4" onClick={() => playSound('Bb4')}></div>
      <div className={`key white ${getKeyClass('B4')}`} data-note="B4" onClick={() => playSound('B4')}></div>
    </div>
  );
};

export default Piano;
