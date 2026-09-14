import React from 'react'
import songs from '../data/songs'
function Home({setCurrSong}) {
   return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
      <div className="text-2xl font-bold">Good afternoon</div>
      <div className="grid grid-cols-4 gap-4">
  {songs.map((song) => (
    <div key={song.id} onClick={() => setCurrSong(song)} className="bg-neutral-800 hover:bg-neutral-700 rounded-lg p-4 cursor-pointer transition">
      <img src={song.image} className="w-full aspect-square object-cover rounded mb-3" />
      <div className="text-sm font-medium">{song.title}</div>
      <div className="text-xs text-neutral-400">{song.artist}</div>
    </div>
  ))}
</div>
    </div>
  )
}

export default Home
