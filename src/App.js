import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/profile';
import Registration from './pages/Registration';
import Thanks from './pages/Thanks';
import Thanks2 from './pages/Thanks2';
import Item from './pages/Item';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/Profile" element={<Profile/>}></Route>
        <Route exact path="/Registration" element={<Registration/>}></Route>
        <Route exact path="/Thanks" element={<Thanks/>}></Route>
        <Route exact path="/Thanks2" element={<Thanks2/>}></Route>
        <Route exact path="/Item" element={<Item/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;