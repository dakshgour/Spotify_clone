import React from 'react'
import { Music, Home, Bell, Disc3, Search } from 'lucide-react'

function Header() {
  return (
    <div className="h-16 flex items-center justify-between px-4 border-b border-neutral-800 shrink-0">
      <div id='left_logo' className="text-xl font-bold text-green-500 w-32 h-auto">
        <img
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png'
        />
      </div>
      <div id='center_search_bar' className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
        <input type="text" className="bg-neutral-800 rounded-full pl-10 pr-4 py-2 text-sm w-96 outline-none placeholder-neutral-400" placeholder='What do you want to play ?'/>
      </div>
      <div id='right_icons' className="flex items-center gap-4">
        <Bell className="text-neutral-300 hover:text-white cursor-pointer transition " size={32}/>
        <Home className="text-neutral-300 hover:text-white cursor-pointer transition " size={32}/>
      </div>
    </div>
  )
}

export default Header