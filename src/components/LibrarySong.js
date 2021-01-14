import React from 'react';

const LibrarySong = ({id,cover, name, artist}) => {

    return(
        <div key={id} className="library-song">
            <img src={cover} alt="album cover"/>
            <div className="song-description">
                <h3>{name}</h3>
                <h4>{artist}</h4>
            </div>
        </div>
    )
};

export default LibrarySong;