import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Cards } from './components/Cards/Cards';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { NotFound } from './components/NotFound/NotFound';
import { Carrousel } from './components/Carrousel/Carrousel'; // Nouveau composant Carrousel
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
        <Route 
          path="/logement/:id" 
          element={
            <div className="App">
              <Header />
              <Carrousel /> {/* Ajout du composant Carrousel */}
              <Footer />
            </div>
          } 
        />
        <Route 
          path="*" 
          element={
            <div className="App">
              <Header />
              <NotFound /> {/* Page 404 */}
              <Footer />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;