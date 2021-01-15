import React, { useState, useRef } from "react";

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
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  
  // Ref
  const AudioRef = useRef(null);

  // Event Handlers

  const TimeUpdateHandler = (e) => {
    setSongInfo({
        ...songInfo,
        currentTime: e.target.currentTime,
        duration: (e.target.duration - e.target.currentTime),
    });
};


  return (
    <div className="app">
        <Library songs={songs} isPlaying={isPlaying} setCurrentSong={setCurrentSong} AudioRef={AudioRef} />
        <Song currentSong={currentSong}/>
        <Player currentSong={currentSong} AudioRef={AudioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songInfo={songInfo} setSongInfo={setSongInfo} TimeUpdateHandler={TimeUpdateHandler} />
    </div>
  );
}

export default App;
