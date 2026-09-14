import React from 'react'
import Header from './Header'
import MainComp from './MainComp'
import Playbar from './Playbar'
import QueuePanel from './QueuePanel'
import SideBar from './SideBar'
import AeroShards from './AeroShards/AeroShards'

function Layout({children,currentSong}) {
  return (
    <div className="h-screen flex flex-col text-white relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <AeroShards
  backgroundColor="#120F17"
  shardColor="#896ABD"
  accentColor="#A855F7"
  placement="full"
/>
      </div>

      <Header/>
      <div id='MainContent' className="flex flex-1 overflow-hidden">
        <SideBar/>
        <MainComp>{children}</MainComp>
        <QueuePanel/>
      </div>
      <Playbar currentSong={currentSong} />
    </div>
  )
}

export default Layout