import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/Profile" element={<Profile/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;