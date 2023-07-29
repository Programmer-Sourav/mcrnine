import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import ViewDetails from './pages/ViewDetails';
import { Toaster } from 'react-hot-toast';
import VideosList from './pages/VideosList';
import PlaylistsDisplay from './pages/PlaylistsDisplay';
import Playlist from './pages/PlayList';
import WatchLater from './pages/WatchLater';
import Explore from './pages/Explore';

function App() {
  return (
    <div className="App">
       {<Toaster position="bottom-right" reverseOrder={true} />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<ViewDetails/>}/>
        <Route path='/categoryvid/:category' element={<VideosList/>}/>
        <Route path='/playlist' element={<PlaylistsDisplay/>}/>
        <Route path='/playlistdetails/:playlistName' element={<Playlist/>}/>
        <Route path='/watchlater' element={<WatchLater/>}/>
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
