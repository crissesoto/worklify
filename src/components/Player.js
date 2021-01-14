import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    // State
    const [songInfo, setSongInfo] = useState({
        currentTime: "0:00",
        duration: "0:00",
    });

    // Ref
    const AudioRef = useRef(null);

    // Event Handlers
    const PlayMusicHandler = (e) => {

        setIsPlaying(!isPlaying);
        console.log(isPlaying)

        if(isPlaying){
            AudioRef.current.pause();
        }else{
            AudioRef.current.play();
        }
    };

    const TimeUpdateHandler = (e) => {
        setSongInfo({
            ...songInfo,
            currentTime: e.target.currentTime,
            duration: (e.target.duration - e.target.currentTime),
        });
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
                <input min={0} max={songInfo.duration} onChange={DragHandler} value={songInfo.currentTime} type="range"></input>
                <p>{GetTime(songInfo.duration - songInfo.currentTime)}</p>
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