import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import CarouselLogo from './components/CarouselLogo';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      {/* Banner */}
      <Banner />
      {/* Carousel */}
      <Carousel />
      {/* CarouselLogo */}
      <CarouselLogo />
      {/* Galeria */}
      <Galeria />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;