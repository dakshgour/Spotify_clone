import React from 'react'
import { SkipBack, Play, SkipForward, Volume2,ListMusic } from 'lucide-react'
function Playbar({currentSong ,queueOpen,setqueueOpen}) {
  return (
    <div className="h-20 border-t border-neutral-800 flex items-center px-4 shrink-0 justify-between select-none">
      <div className="flex items-center gap-3 w-64">
        <img src={currentSong?.image} className="w-14 h-14 rounded" />
        <div>
          <div className="text-sm font-medium">{currentSong?.title}</div>
<div className="text-xs text-neutral-400">{currentSong?.artist}</div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <SkipBack className="text-neutral-300 hover:text-white cursor-pointer" />
        <Play className="text-black bg-white rounded-full p-2 cursor-pointer" size={36} />
        <SkipForward className="text-neutral-300 hover:text-white cursor-pointer" />
      </div>

      <div className="w-64 flex justify-end gap-x-6">
        <ListMusic className={`cursor-pointer transition-all duration-200 ${
    queueOpen
      ? "text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"
      : "text-neutral-300 hover:text-white"
  }`} onClick={()=> setqueueOpen(!queueOpen)}/>
        <Volume2 className="text-neutral-300" />
      </div>
    </div>
  )
}

export default Playbar