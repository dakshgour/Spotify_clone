import React from 'react'
import songs from '../data/songs'
function MainComp({ children }) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {children}
    </div>
  )
}

export default MainComp
