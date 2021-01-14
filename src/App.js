import React, { useState } from "react";

import './styles/app.css';

import Player from './components/Player';
import Song from './components/Song';

import GenerateMusic from "./data";

function App() {
  // State
  const [songs, setSongs] = useState(GenerateMusic());
  const [currentSong, SetCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);


  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
