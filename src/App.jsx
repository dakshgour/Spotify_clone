import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import PlaylistPage from './pages/PlaylistPage'
import Profile from './pages/Profile'
import playlists from './data/playlists'
import LikedSongs from './pages/LikedSongs'
import { useState } from 'react'
function App() {
  const [CurrSong,setCurrSong] = useState(null)
  const [AddNewPlaylist,setAddNewPlaylist]=useState(false)
  const [playlistData, setPlaylistData] = useState(playlists)
  return (
    <Layout currentSong ={CurrSong} setAddNewPlaylist={setAddNewPlaylist}  AddNewPlaylist={AddNewPlaylist} playlistData={playlistData} setPlaylistData={setPlaylistData}>
      <Routes>
        <Route path="/" element={<Home setCurrSong={setCurrSong} />} />
        <Route path="/search" element={<SearchPage setCurrSong={setCurrSong} />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/liked" element={<LikedSongs />} />
      </Routes>
    </Layout>
  )
}

export default App