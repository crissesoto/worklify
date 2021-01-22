import React from 'react';

const LibrarySong = ({songs, song, currentSong, setCurrentSong, setSongs, AudioRef, isPlaying }) => {


    const selectSongHandler = e => {

        setCurrentSong(song);

        //Highlight active song
        const updatedSongList = songs.map(song => {
            if(song.id === e.target.id) {
                return (
                    {...song, active: true}
                )
            }else {
                return (
                    {...song, active: false}
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
        }
    }

    return(
        <div id={song.id} className={`library-song ${song.active && "active"}`} onClick={selectSongHandler}>
            <img src={song.cover} alt="album cover"/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
};

export default LibrarySong;