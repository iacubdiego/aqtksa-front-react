import React from 'react';
import { Router, Route } from "wouter";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Productos from "./pages/Productos";
import Nosotros from './pages/Nosotros';
import ServicioTecnico from './pages/ServicioTecnico';
import Consultoria from './pages/Consultoria';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/productos" component={Productos} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/serviciotecnico" component={ServicioTecnico} />
        <Route path="/consultoria" component={Consultoria} />
        <Route path="/*" component={Error} />
      </Router>

      <Footer />
    </>
  );
}

export default App;