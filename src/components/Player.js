import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Player = () => {

    return(
        <div className="player">
            <div className="time-controller">
                <h1>start time</h1>
                <input type="range"></input>
                <p>end time</p>
            </div>
            <div className="play-contoller">
                <FontAwesomeIcon icon={faAngleLeft} className="skip-back" size="2x" />
                <FontAwesomeIcon icon={faPlay} className="play" size="2x" />
                <FontAwesomeIcon icon={faAngleRight} className="skip-forward" size="2x" />
            </div>
        </div>
    )
};

export default Player;