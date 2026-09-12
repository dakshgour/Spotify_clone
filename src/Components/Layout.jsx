import React from 'react'
import Header from './Header'
import MainComp from './MainComp'
import Playbar from './Playbar'
import QueuePanel from './QueuePanel'
import SideBar from './SideBar'
function Layout() {
  return (
    <div className="h-screen flex flex-col bg-black text-white">
<Header/>
<div id='MainContent' className="flex flex-1 overflow-hidden">
<SideBar/>
<MainComp/>
<QueuePanel/>
</div>
<Playbar/>
    </div>
  )
}

export default Layout
