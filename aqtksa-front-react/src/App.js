// App.js
import React from 'react';
import Carousel from './components/Carousel';


function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
        <div className="flex items-center">
          <img className="h-8 mr-4" src="logo.png" alt="Logo" />
          <span className="font-bold text-lg">Mi Sitio</span>
        </div>
        <button className="text-white focus:outline-none lg:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <a href="#contactos" className="hover:text-gray-400">Contactos</a>
          <a href="#sobre-nosotros" className="hover:text-gray-400">Sobre nosotros</a>
          <a href="#productos" className="hover:text-gray-400">Productos</a>
        </div>
      </nav>

      {/* Sección principal */}
      <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a Mi Sitio</h1>
          <p className="text-lg">Explora nuestra oferta de productos y servicios</p>
        </div>
        <div className="mt-8">
          {/* Aquí va el código para el carrusel de imágenes */}
        </div>
      </section>
      <div className="mt-8">
      <Carousel />
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto py-8">
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <h2 className="text-lg font-bold mb-4">Columna 1</h2>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#inicio" className="hover:text-gray-400">Inicio</a>
                </li>
                <li className="mb-2">
                  <a href="#contactos" className="hover:text-gray-400">Contactos</a>
                </li>
                <li className="mb-2">
                  <a href="#sobre-nosotros" className="hover:text-gray-400">Sobre nosotros</a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <h2 className="text-lg font-bold mb-4">Columna 2</h2>
              {/* Contenido de la segunda columna del footer */}
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <h2 className="text-lg font-bold mb-4">Columna 3</h2>
              {/* Contenido de la tercera columna del footer */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;