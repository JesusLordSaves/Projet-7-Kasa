import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Cards from './Cards';
import Footer from './Footer';
import About from './About'; // Import du composant About
import '../assets/css/style.css';

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