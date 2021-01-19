import characterIdle from './images/magnusPixelOneX32.gif';
import characterFlying from './images/magnusPixelRocketV2.gif';
import characterFalling from './images/magnusPixelFalling.gif';
import React, { useState, useEffect } from 'react';
import Character from './Components/Character.jsx';
import './App.css';

function App() {
  return (
    <>
      <header>
      </header>
      <div className="App">
        <Character characterIdle={characterIdle} characterFalling={characterFalling} characterFlying={characterFlying}></Character>
      </div>
      <footer>
      </footer>
    </>
  );
}

export default App;
