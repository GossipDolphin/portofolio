import characterIdle from './images/magnusPixelOneX32.gif';
import characterFlying from './images/magnusPixelRocketV2.gif';
import characterFalling from './images/magnusPixelFalling.gif';
import React from 'react';
import Character from './components/Character.jsx';
import TopButtonsContainer from './components/TopButtonsContainer.jsx';
import TechnologiesContainer from './components/TechnologiesContainer.jsx';
import LanguagesContainer from './components/LanguagesContainer.jsx';
import ProjectsContainer from './components/ProjectsContainer.jsx';

import './App.css';

function App() {

  var refArray;
  const setRefArray = (array) => {
    refArray = array;
  }

  const getRefArray = () => {
    return refArray;
  }

  var languagesRefArray;
  const setLanguagesRefArray = (array) => {
    languagesRefArray = array;
  }

  const getLanguagesRefArray = () => {
    return languagesRefArray;
  }

  return (
    <>
      <header>
      </header>
      <div className="App">
        <Character getLanguagesRefArray={getLanguagesRefArray} getRefArray={getRefArray} characterIdle={characterIdle} characterFalling={characterFalling} characterFlying={characterFlying}></Character>
        <TopButtonsContainer></TopButtonsContainer>
        <TechnologiesContainer setRefArray={setRefArray}></TechnologiesContainer>
        <LanguagesContainer setRefArray={setLanguagesRefArray}></LanguagesContainer>
        <ProjectsContainer></ProjectsContainer>
      </div>
      <footer>
      </footer>
    </>
  );
}

export default App;
