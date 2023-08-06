import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import HeadTail from './components/HeadTail';
import './App.css';


function App() {
  return (
   <>
   
    <Router>
      <div className="App">
       <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/head-tail" element={<HeadTail/>} />
          </Routes>
      </div>
    </Router>
    
   </>
    
  );
}

export default App;
