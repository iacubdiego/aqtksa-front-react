import React from 'react';
import { Router, Route } from "wouter";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Productos from "./pages/Productos";
import Nosotros from './pages/Nosotros';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/productos" component={Productos} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/*" component={Error} />
      </Router>

      <Footer />
    </div>
  );
}

export default App;