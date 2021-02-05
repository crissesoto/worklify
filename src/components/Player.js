import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Player = ({ PlayMusicHandler, skipTrackHandler, DragHandler, currentSong, AudioRef, isPlaying, songInfo, TimeUpdateHandler }) => {

    // Helpers
    const GetTime = (time) => {
         return Math.floor(time / 60) + ":" + ("0" + Math.floor( time % 60)).slice(-2);
    };

    // Style
    const trackAnimation =  {
        transform: `translateX(${songInfo.animationPercentage}%)`
    };

    return(
        <div className="player-container">
            <div className="time-controller">
                <p>{GetTime(songInfo.currentTime)}</p>
                <div style={{ background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})` }} className="track">
                    <input min={0} max={songInfo.duration || 0} onChange={DragHandler} value={songInfo.currentTime} type="range"></input>
                    <div style={trackAnimation} className="animate-track"></div>
                </div>
                <p>{GetTime(songInfo.duration > 0 ? (songInfo.duration - songInfo.currentTime) : 0)}</p>
            </div>
            <div className="play-controller">
                <FontAwesomeIcon icon={faAngleLeft} onClick={(e) => skipTrackHandler('skip-back')} className="skip-back" size="2x" />
                <FontAwesomeIcon onClick={PlayMusicHandler} icon={isPlaying ? faPause : faPlay} className="play" size="2x" />
                <FontAwesomeIcon icon={faAngleRight} onClick={(e) => skipTrackHandler('skip-forward')} className="skip-forward" size="2x" />
            </div>
            <audio ref={AudioRef} onLoadedMetadata={TimeUpdateHandler} onTimeUpdate={TimeUpdateHandler} onEnded={() => skipTrackHandler('skip-forward')} src={currentSong.audio}></audio>
        </div>
    )
};

export default Player;