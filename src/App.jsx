// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './components/Home';
import Musica from './components/Musica';
import Contacto from './components/Contacto';
import Conocenos from './components/Conocenos';
import Conciertos from './components/Conciertos';
import Videos from './components/Videos';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/conciertos" element={<Conciertos />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
