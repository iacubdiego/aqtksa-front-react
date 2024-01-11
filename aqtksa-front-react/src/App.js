import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import CarouselLogo from './components/CarouselLogo';
import Galeria from './components/Galeria';
import Footer from './components/Footer';
import Feature from './components/Feature';

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
      {/* Feature */}
      <Feature />      
      {/* CarouselLogo */}
      <CarouselLogo />
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