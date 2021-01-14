import React, { useState } from "react";

import './styles/app.css';

import Player from './components/Player';
import Song from './components/Song';
import Library from "./components/Library";

import GenerateMusic from "./data";

function App() {
  // State
  const [songs, setSongs] = useState(GenerateMusic());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);


  return (
    <div className="app">
        <Library songs={songs} currentSont={currentSong} setCurrentSong={setCurrentSong} />
        <Song currentSong={currentSong}/>
        <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
