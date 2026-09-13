import React from 'react'
import {Plus,Search} from'lucide-react'
import { Link } from 'react-router-dom'
import playlists from '../data/playlists'
function SideBar() {
  return (
    <div className="w-64 border-r border-neutral-800 overflow-y-auto p-4 shrink-0 flex flex-col gap-6">
     <div id='Add_Playlist' className="flex items-center gap-3 text-neutral-300 hover:text-white cursor-pointer transition font-medium">
      <Plus/>
      <span>Add</span>
     </div>
     <div className="border-t border-neutral-800"></div>
    <Link to="/search">
     <div id='Search' className="flex items-center gap-3 text-neutral-300 hover:text-white cursor-pointer transition font-medium">
      <Search/>
      <span>Search</span>
     </div>
     </Link>
     <div id='library_heading' className="text-neutral-400 text-sm font-semibold uppercase tracking-wide">
  Your Library
</div>
{playlists.map((playlist) => (
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
