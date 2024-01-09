import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import Galeria from './components/Galeria';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* Carousel */}
      <Carousel />
      {/* Galeria */}
      <Galeria />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;