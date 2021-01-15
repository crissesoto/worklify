import React from 'react';

const LibrarySong = ({song, setCurrentSong, AudioRef, isPlaying }) => {


    const selectSongHandler = () => {

        setCurrentSong(song);
        
        if (isPlaying) {
            const playPromise = AudioRef.current.play();
            if ( playPromise !== undefined ){
                playPromise.then(audio => {
                    AudioRef.current.play();
                })
            }
        }
    }

    return(
        <div id={song.id} className="library-song" onClick={selectSongHandler}>
            <img src={song.cover} alt="album cover"/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
};

export default LibrarySong;