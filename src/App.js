import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import ViewDetails from './pages/ViewDetails';
import { Toaster } from 'react-hot-toast';
import VideosList from './pages/VideosList';

function App() {
  return (
    <div className="App">
       {<Toaster position="bottom-right" reverseOrder={true} />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<ViewDetails/>}/>
        <Route path='/categoryvid/:category' element={<VideosList/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
