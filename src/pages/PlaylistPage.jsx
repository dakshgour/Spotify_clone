import React from 'react'
import { useParams } from 'react-router-dom'
import playlists from '../data/playlists';
import songs from '../data/songs'

function PlaylistPage() {
  const { id } = useParams();
  const playlist = playlists.find(p => p.id === Number(id));
  const playlistsongs = songs.filter(song => playlist.songIds.includes(song.id));

  return (
    <div className="flex flex-col gap-6">
      <div className="text-2xl font-bold">{playlist.name}</div>
      <div className="grid grid-cols-4 gap-4">
        {playlistsongs.map((song) => (
          <div key={song.id} className="bg-neutral-800 hover:bg-neutral-700 rounded-lg p-4 cursor-pointer transition">
            <img src={song.image} className="w-full aspect-square object-cover rounded mb-3" />
            <div className="text-sm font-medium">{song.title}</div>
            <div className="text-xs text-neutral-400">{song.artist}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlaylistPage