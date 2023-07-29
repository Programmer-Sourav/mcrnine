import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import ViewDetails from './pages/ViewDetails';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
       {<Toaster position="bottom-right" reverseOrder={true} />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<ViewDetails/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
