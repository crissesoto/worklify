import React, { useState } from "react";

import './styles/app.css';

import Player from './components/Player';
import Song from './components/Song';

import GenerateMusic from "./data";

function App() {
  // State
  const [songs, setSongs] = useState(GenerateMusic());
  const [currentSong, SetCurrentSong] = useState(songs[0])

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong}/>
    </div>
  );
}

export default App;
