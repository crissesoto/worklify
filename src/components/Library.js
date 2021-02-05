import React from "react";

import LibrarySong from "./LibrarySong";

const Library = ({songs, libraryStatus, selectSongHandler }) => {

    return(
        <div className={`library ${libraryStatus && "library-open"}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {
                    songs.map(( song ) => {
                        return(
                            <LibrarySong key={song.id} song={song} selectSongHandler={selectSongHandler} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Library;