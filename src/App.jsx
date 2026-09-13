import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import PlaylistPage from './pages/PlaylistPage'
import Profile from './pages/Profile'
import LikedSongs from './pages/LikedSongs'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/liked" element={<LikedSongs />} />
      </Routes>
    </Layout>
  )
}

export default App