import React from "react";

import LibrarySong from "./LibrarySong";

const Library = ({songs, currentSong, setCurrentSong, AudioRef, isPlaying, setSongs, libraryStatus}) => {

    return(
        <div className={`library ${libraryStatus && "library-open"}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {
                    songs.map(( song ) => {
                        return(
                            <LibrarySong key={song.id} song={song} currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} setSongs={setSongs} AudioRef={AudioRef} isPlaying={isPlaying} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Library;