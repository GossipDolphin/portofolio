import characterIdle from './images/magnusPixelOneX32.gif';
import characterFlying from './images/magnusPixelRocketV2.gif';
import characterFalling from './images/magnusPixelFalling.gif';
import React from 'react';
import Character from './components/Character.jsx';
import TopButtonsContainer from './components/TopButtonsContainer.jsx';
import TechnologiesContainer from './components/TechnologiesContainer.jsx';

import './App.css';

function App() {

  var refArray;
  const setRefArray = (array) => {
    refArray = array;
  }

  const getRefArray = () => {
    return refArray;
  }

  return (
    <>
      <header>
      </header>
      <div className="App">
        <Character  getRefArray={getRefArray} characterIdle={characterIdle} characterFalling={characterFalling} characterFlying={characterFlying}></Character>
        <TopButtonsContainer></TopButtonsContainer>
        <TechnologiesContainer setRefArray={setRefArray}></TechnologiesContainer>
      </div>
      <footer>
      </footer>
    </>
  );
}

export default App;
