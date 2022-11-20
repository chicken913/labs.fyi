import React from 'react';
import NavBar from './components/NavBar'
import {Route, Link, Routes} from "react-router-dom"
import HomePage from './pages/HomePage';
import Journal from './pages/Journal';
import Macros from './pages/Macros';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/journal" element={<Journal/>}/>
        <Route path="/macros" element={<Macros/>}/>
      </Routes>
    </div>
  );
}

export default App;
