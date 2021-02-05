import React from 'react';

const LibrarySong = ({ song, selectSongHandler }) => {

    return(
        <div id={song.id} className={`library-song ${song.active && "active"}`} onClick={(e) => selectSongHandler(song)}>
            <img src={song.cover} alt="album cover"/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
};

export default LibrarySong;