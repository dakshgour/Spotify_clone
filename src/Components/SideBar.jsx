import React from 'react'
import { Plus, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function SideBar({
  setAddNewPlaylist,
  AddNewPlaylist,
  playlistData,
  setPlaylistData
}) {
  const [playlistName, setPlaylistName] = useState("")

  return (
    <div className="w-64 border-r border-neutral-800 overflow-y-auto p-4 shrink-0 flex flex-col gap-6">

      <div
        id="Add_Playlist"
        className="flex items-center gap-3 text-neutral-300 hover:text-white cursor-pointer transition font-medium"
      >
        <Plus onClick={() => setAddNewPlaylist(true)} />
        <span>Add</span>
      </div>

      <div className="border-t border-neutral-800"></div>

      <Link to="/search">
        <div
          id="Search"
          className="flex items-center gap-3 text-neutral-300 hover:text-white cursor-pointer transition font-medium"
        >
          <Search />
          <span>Search</span>
        </div>
      </Link>

      <div
        id="library_heading"
        className="text-neutral-400 text-sm font-semibold uppercase tracking-wide"
      >
        Your Library
      </div>

      {AddNewPlaylist && (
        <input
          type="text"
          placeholder="Playlist name..."
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          className="h-12 w-full bg-neutral-800 rounded px-3 text-sm text-neutral-300 outline-none border border-neutral-700 focus:border-purple-500 transition"
          onKeyDown={(e) => {
            if (e.key === "Enter" && playlistName.trim() !== "") {

              const newPlaylist = {
                id: Date.now(),
                name: playlistName,
                songIds: []
              }

              setPlaylistData([...playlistData, newPlaylist])
              setPlaylistName("")
              setAddNewPlaylist(false)
            }
          }}
        />
      )}

      {playlistData.map((playlist) => (
        <Link key={playlist.id} to={`/playlist/${playlist.id}`}>
          <div className="h-12 bg-neutral-800 rounded flex items-center px-3 text-sm text-neutral-300 hover:bg-neutral-700 cursor-pointer transition">
            {playlist.name}
          </div>
        </Link>
      ))}

    </div>
  )
}

export default SideBar