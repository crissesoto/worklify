import React from "react";

import LibrarySong from "./LibrarySong";
import Song from './Song';

const Library = ({songs, setCurrentSong, AudioRef, isPlaying }) => {

    return(
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {
                    songs.map(( song ) => {
                        return(
                            <LibrarySong key={song.id} song={song} setCurrentSong={setCurrentSong} AudioRef={AudioRef} isPlaying={isPlaying} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Library;