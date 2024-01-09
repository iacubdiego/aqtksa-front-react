import React from 'react';

const Footer = () => {
  return (
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
  )}
  export default Footer;
