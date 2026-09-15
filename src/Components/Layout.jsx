import React from 'react'
import Header from './Header'
import MainComp from './MainComp'
import Playbar from './Playbar'
import QueuePanel from './QueuePanel'
import SideBar from './SideBar'
import AeroShards from './AeroShards/AeroShards'
import { useState } from 'react'

function Layout({children,currentSong}) {
  const [queueOpen,setqueueOpen] = useState(true)
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
        {queueOpen && <QueuePanel />}
      </div>
      <Playbar currentSong={currentSong}  queueOpen = {queueOpen} setqueueOpen ={setqueueOpen}/>
    </div>
  )
}

export default Layout