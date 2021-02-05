import React, { useState, useRef } from "react";

import './styles/app.css';

import Player from './components/Player';
import Song from './components/Song';
import Library from "./components/Library";
import Nav from './components/Nav';

import GenerateMusic from "./data";

function App() {
  // State
  const [songs, setSongs] = useState(GenerateMusic());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  
  // Ref
  const AudioRef = useRef(null);

  // Event Handlers
  // update some duration and playing time
  const TimeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    // calculate procentage for animation
    const roundedCurrentTime = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round((roundedCurrentTime / roundedDuration) * 100);
    
    setSongInfo({
        ...songInfo,
        currentTime: currentTime,
        duration: duration,
        animationPercentage: animationPercentage
    });
};

// Helpers 
//Highlight active song and setPlaying song
const selectSongHandler = async (song) => {

  await setCurrentSong(song);
  //Highlight active song
  const updatedSongList = songs.map(filteredSong => {
      if(filteredSong.id === song.id) {
          return (
              {...filteredSong, active: true}
          )
      }else {
          return (
              {...filteredSong, active: false}
          )
      }

  });

  setSongs(updatedSongList);
          
  if (isPlaying) {
      const playPromise = AudioRef.current.play();
      if ( playPromise !== undefined ){
          playPromise.then(audio => {
              AudioRef.current.play();
          })
      }
  };
};

// Skipping to previous or nex song
const skipTrackHandler = async (direction) => {
  const totalSongs = songs.length - 1;
  const currentIndex =  songs.findIndex(song => song.id === currentSong.id);

  const nextSong =  (currentIndex + 1) < songs.length ? (songs[currentIndex + 1]) : songs[0];
  const previousSong = (currentIndex - 1) < 0 ? songs[totalSongs] : (songs[currentIndex - 1]);
  
  if (direction === 'skip-forward') {
      await selectSongHandler(nextSong);
  } else if (direction === 'skip-back') {
      await selectSongHandler(previousSong);
  };
};

// Skip by dragging
const DragHandler = (e) => {
  AudioRef.current.currentTime = e.target.value;
  setSongInfo({...songInfo, currentTime: e.target.value});
};

// Start / Pause player
const PlayMusicHandler = (e) => {

  setIsPlaying(!isPlaying);
  
  if(isPlaying){
      AudioRef.current.pause();
  }else{
      AudioRef.current.play();
  }
};


  return (
    <div className={`app ${libraryStatus ? "library-active" : "" } `}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Library songs={songs} libraryStatus={libraryStatus} selectSongHandler={selectSongHandler} />
      <Song currentSong={currentSong}/>
      <Player DragHandler={DragHandler} PlayMusicHandler={PlayMusicHandler} currentSong={currentSong} AudioRef={AudioRef} isPlaying={isPlaying} skipTrackHandler={skipTrackHandler} songInfo={songInfo} TimeUpdateHandler={TimeUpdateHandler} />
    </div>
  );
}

export default App;
