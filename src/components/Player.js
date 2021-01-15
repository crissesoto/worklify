import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Player = ({ currentSong, AudioRef, isPlaying, setIsPlaying, songInfo, setSongInfo, TimeUpdateHandler }) => {

    // Event Handlers
    const PlayMusicHandler = (e) => {

        setIsPlaying(!isPlaying);
        
        if(isPlaying){
            AudioRef.current.pause();
        }else{
            AudioRef.current.play();
        }
    };

    const DragHandler = (e) => {
        AudioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    };

    // Helpers
    const GetTime = (time) => {
         return Math.floor(time / 60) + ":" + ("0" + Math.floor( time % 60)).slice(-2);
    };

    return(
        <div className="player-container">
            <div className="time-controller">
                <p>{GetTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration > 0 ? songInfo.duration : 0} onChange={DragHandler} value={songInfo.currentTime} type="range"></input>
                <p>{GetTime(songInfo.duration > 0 ? songInfo.duration : 0)}</p>
            </div>
            <div className="play-controller">
                <FontAwesomeIcon icon={faAngleLeft} className="skip-back" size="2x" />
                <FontAwesomeIcon onClick={PlayMusicHandler} icon={isPlaying ? faPause : faPlay} className="play" size="2x" />
                <FontAwesomeIcon icon={faAngleRight} className="skip-forward" size="2x" />
            </div>
            <audio ref={AudioRef} onLoadedMetadata={TimeUpdateHandler} onTimeUpdate={TimeUpdateHandler} src={currentSong.audio}></audio>
        </div>
    )
};

export default Player;