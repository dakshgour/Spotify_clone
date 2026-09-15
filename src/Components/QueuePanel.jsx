import React from 'react'
import songs from '../data/songs'

function QueuePanel() {
  return (
    <div className="w-72 border-l border-neutral-800 overflow-y-auto p-4 shrink-0 flex flex-col gap-4 select-none">
      <div className="text-lg font-bold">Now Playing Queue</div>
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded cursor-pointer transition">
          <img src={song.image} className="w-12 h-12 rounded object-cover" />
          <div>
            <div className="text-sm font-medium">{song.title}</div>
            <div className="text-xs text-neutral-400">{song.artist}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default QueuePanel