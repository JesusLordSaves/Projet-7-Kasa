import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Cards } from './components/Cards/Cards';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About'; // Import du composant About
import './css/style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="App">
              <Header />
              <Banner />
              <Cards />
              <Footer />
            </div>
          } 
        />
        <Route 
          path="/about" 
          element={
            <div className="App">
              <Header />
              <About /> {/* Ajout de la page About */}
              <Footer />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;