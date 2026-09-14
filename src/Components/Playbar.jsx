import React from 'react'
import { SkipBack, Play, SkipForward, Volume2 } from 'lucide-react'
function Playbar({currentSong}) {
  return (
    <div className="h-20 border-t border-neutral-800 flex items-center px-4 shrink-0 justify-between">
      <div className="flex items-center gap-3 w-64">
        <img src="..." className="w-14 h-14 rounded" />
        <div>
          <div className="text-sm font-medium">Song Name</div>
          <div className="text-xs text-neutral-400">Artist Name</div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <SkipBack className="text-neutral-300 hover:text-white cursor-pointer" />
        <Play className="text-black bg-white rounded-full p-2 cursor-pointer" size={36} />
        <SkipForward className="text-neutral-300 hover:text-white cursor-pointer" />
      </div>

      <div className="w-64 flex justify-end">
        <Volume2 className="text-neutral-300" />
      </div>
    </div>
  )
}

export default Playbar