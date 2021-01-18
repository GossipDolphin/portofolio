import characterIdle from './magnusPixelOneX32.gif';
import characterFlying from './magnusPixelRocketV2.gif';
import characterFalling from './magnusPixelFalling.gif';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [characterURI, setCharacterUri] = useState(characterIdle);

  const [lastScroll, setLastScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var offset = window.pageYOffset;
      if (offset > lastScroll) {
        setCharacterUri(characterFalling)
        setLastScroll(window.pageYOffset)
      } else if (offset < lastScroll) {
        setCharacterUri(characterFlying)
        setLastScroll(window.pageYOffset)
      }
      setTimeout(function() {
        setCharacterUri(characterIdle)
        setLastScroll(window.pageYOffset)
      }, 500);
    }
  ,[])})
  

  return (
    <>
    <div className="App">
      <div>
        <img src={characterURI} className="App-logo" alt="logo" />
      </div>
    </div>
    <footer>
    </footer>
    </>
  );
}

export default App;
