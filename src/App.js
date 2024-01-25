import React from 'react';
// import { Link, Route, Switch } from "wouter";
// import Nosotros from "./pages/Nosotros"

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Carousel from './components/CarouselServicios/Carousel';
import CarouselLogo from './components/CarouselLogo';
import Galeria from './components/Galeria/Galeria';
import Footer from './components/Footer';
import Feature from './components/Feature';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* CarouselLogo */}
      <CarouselLogo />
      {/* Feature */}
      <Feature />      
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