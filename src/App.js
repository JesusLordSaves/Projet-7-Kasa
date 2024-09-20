import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Cards from './Cards';
import Footer from './Footer';
import './css/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Banner />
        <Cards />
        <Footer />
      </div>
    </Router>
  );
}

export default App;