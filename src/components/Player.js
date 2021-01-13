import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Player = () => {

    return(
        <div className="player-container">
            <div className="time-controller">
                <p>start time</p>
                <input type="range"></input>
                <p>end time</p>
            </div>
            <div className="play-controller">
                <FontAwesomeIcon icon={faAngleLeft} className="skip-back" size="2x" />
                <FontAwesomeIcon icon={faPlay} className="play" size="2x" />
                <FontAwesomeIcon icon={faAngleRight} className="skip-forward" size="2x" />
            </div>
        </div>
    )
};

export default Player;