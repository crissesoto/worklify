import React from "react";

import LibrarySong from "./LibrarySong";

const Library = ({songs, currentSong, setCurrentSong}) => {

    return(
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {
                    songs.map((song, i) => {
                        return(
                            <LibrarySong key={i} id={i} name={song.name} cover={song.cover} artist={song.artist} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Library;