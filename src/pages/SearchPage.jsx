import React from 'react'
import songs from '../data/songs'
import { useState } from 'react'

function SearchPage({ setCurrSong }) {
  const [searchText, setSearchText] = useState("")

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchText.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="What do you want to play?"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full max-w-xl bg-neutral-800 rounded-full px-5 py-3 text-white outline-none border border-neutral-700 focus:border-purple-500 transition"
      />

      <div className="mt-6 flex flex-col gap-3">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <div
              key={song.id}
              onClick={() => setCurrSong(song)}
              className="h-16 bg-neutral-800 rounded flex items-center gap-4 px-4 cursor-pointer hover:bg-neutral-700 transition"
            >
              <img
                src={song.image}
                className="w-12 h-12 rounded object-cover"
              />

              <div>
                <div className="text-sm font-medium text-white">
                  {song.title}
                </div>

                <div className="text-xs text-neutral-400">
                  {song.artist}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-neutral-400">No songs found</p>
        )}
      </div>
    </div>
  )
}

export default SearchPage