import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Player = ({ currentSong }) => {
    // varibles
    // Ref
    const AudioRef = useRef(null);

    // state
    const [IconName, SetIconName] = useState(faPlay);

    // Event Handlers
    const PlayMusicHandler = (e) => {

        if (e.target.parentElement.classList.contains("fa-pause")) {
            AudioRef.current.pause();
            SetIconName(faPlay);
        }else {
            SetIconName(faPause);
            AudioRef.current.play();
        }
        
    }

    return(
        <div className="player-container">
            <div className="time-controller">
                <p>start time</p>
                <input type="range"></input>
                <p>end time</p>
            </div>
            <div className="play-controller">
                <FontAwesomeIcon icon={faAngleLeft} className="skip-back" size="2x" />
                <FontAwesomeIcon onClick={PlayMusicHandler} icon={IconName} className="play" size="2x" />
                <FontAwesomeIcon icon={faAngleRight} className="skip-forward" size="2x" />
            </div>
            <audio ref={AudioRef} src={currentSong.audio}></audio>
        </div>
    )
};

export default Player;