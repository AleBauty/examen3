import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HistorialProvider } from './context/HistorialContext';
import Home from './pages/Home';
import Clima from './pages/Clima';


const App = () => {
  return (
    <HistorialProvider>
      <Router>
        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clima/:idCiudad" element={<Clima />} />
          </Routes>
        </div>
      </Router>
    </HistorialProvider>
  );
};

export default App;